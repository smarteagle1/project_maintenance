import Footer from "./assets/Footer"
import Navbar from "./assets/Navbar"
import { Routes, Route } from "react-router-dom"
import AssemblyLine from "./assets/Assembly_line"
import StationPage from "./assets/StationPage"
import TestOutline1 from "./assets/TestOutline1"

function App() {
  return(
      <div className="min-h-dvh flex flex-col bg-slate-950 text-white">
      <header><Navbar /></header>
      <main className="flex-1 flex min-h-0 items-stretch">
        <Routes>
        <Route path="/" element={<AssemblyLine/>}/>
        <Route path="/:id" element={<StationPage/>}/>
        <Route path="/test" element={<TestOutline1/>}/>
        </Routes>
        </main>
      <footer><Footer /></footer>
      </div>
  )
}

export default App
