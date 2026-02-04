import express from "express";
import bcrypt from "bcrypt";
import pg from "pg";

const app = express();
const port = 3001;
const hashRounds = 10;

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "secrets",
  password: "1234",
  port: 5432,
});

await db.connect();

// Parse JSON bodies (React will send JSON)
app.use(express.json());

// Optional: if you still submit forms as urlencoded somewhere
app.use(express.urlencoded({ extended: true }));

// Health check
app.get("/api/health", (req, res) => {
  res.json({ ok: true });
});

app.post("/api/register", async (req, res) => {
  const { email, password } = req.body ?? {};

  if (!email || !password) {
    return res.status(400).json({ error: "email and password are required" });
  }

  try {
    const checkResult = await db.query(
      "SELECT 1 FROM users WHERE email=$1",
      [email]
    );

    if (checkResult.rows.length > 0) { // ✅ length (not lenght)
      return res.status(409).json({ error: "User with this email already exists" });
    }

    const hash = await bcrypt.hash(password, hashRounds);

    await db.query(
      "INSERT INTO users (email, password) VALUES ($1, $2)",
      [email, hash]
    );

    return res.status(201).json({ ok: true });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Server error" });
  }
});

app.post("/api/login", async (req, res) => {
  const { email, password } = req.body ?? {};

  if (!email || !password) {
    return res.status(400).json({ error: "email and password are required" });
  }

  try {
    const result = await db.query(
      "SELECT id, email, password FROM users WHERE email=$1",
      [email]
    );

    if (result.rows.length === 0) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const user = result.rows[0];
    const ok = await bcrypt.compare(password, user.password);

    if (!ok) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    // For now: no JWT yet
    return res.json({ ok: true, user: { id: user.id, email: user.email } });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Server error" });
  }
});

app.listen(port, () => {
  console.log(`API running on http://localhost:${port}`);
});