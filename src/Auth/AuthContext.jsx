import { createContext, useContext, useEffect, useMemo, useState } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isBooting, setIsBooting] = useState(true);

  // Load user from localStorage once on app start
  useEffect(() => {
    try {
      const raw = localStorage.getItem("user");
      if (raw) setUser(JSON.parse(raw));
    } catch {
      // ignore bad JSON
    } finally {
      setIsBooting(false);
    }
  }, []);

  // Keep localStorage in sync with state
  useEffect(() => {
    console.log("usr",user);
    if (user) localStorage.setItem("user", JSON.stringify(user));
    else localStorage.removeItem("user");
  }, [user]);

  const login = (userFromServer) => {
    setUser(userFromServer);
  };

  const logout = () => {
    setUser(null);
  };

  const value = useMemo(
    () => ({ user, isBooting, login, logout }),
    [user, isBooting]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside <AuthProvider>");
  return ctx;
}
