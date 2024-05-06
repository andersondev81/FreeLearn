import { BrowserRouter, Routes, Route } from "react-router-dom"

import Footer from "./components/Footer"
import Home from "./pages/Home"
import Sobre from "./pages/Sobre"

import Navbar from "./components/Navbar"
import Login from "./components/Login"

import "./App.css"
import Curso from "./pages/Curso"
import Register from "./components/Register"
import { Cursos } from "./pages/Cursos"
import DashboardAluno from "./pages/DashboardAluno"
import DashboardProfessor from "./pages/DashboardProfessor"
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/cursos" element={<Cursos />} />
            <Route path="/curso" element={<Curso />} />
            <Route path="/dashboard" element={<DashboardAluno/>}></Route>
            <Route path="/dashboard/manage" element={<DashboardProfessor/>}></Route>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  )
}
export default App
