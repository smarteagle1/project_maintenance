import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import { Routes, Route } from "react-router-dom"
import AssemblyLine from "@/pages/Assembly_line"
import StationPage from "@/pages/StationPage"
import TestOutline1 from "@/pages/TestOutline1"
import Login from "@/pages/Login"
import Register from "@/pages/Register"

function App() {
  return(
      <div className="min-h-dvh flex flex-col bg-slate-950 text-white">
      <header><Navbar /></header>
      <main className="flex-1 flex min-h-0 items-stretch">
        <Routes>
        <Route path="/" element={<AssemblyLine/>}/>
        <Route path="/:id" element={<StationPage/>}/>
        <Route path="/test" element={<TestOutline1/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register />}/>
        </Routes>
        </main>
      <footer><Footer /></footer>
      </div>
  )
}

export default App
