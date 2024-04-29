import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Sobre from "./pages/Sobre"

import Navbar from "./components/Navbar"
import Hilights from "./components/Highlights"
import Skills from "./components/Skills"
import Testimonial from "./components/Testimonial"
import About from "./components/About"
import Login from "./components/Login"
import CoursePage from "./components/FigmaCourse"

import "./App.css"
import Faq from "./components/Faq"
import Cursos from "./pages/Cursos"
import Curso from "./pages/Curso"
import Register from "./components/Register"
import PHPCourse from "./components/PHPCourse"
import { Dashboard } from "./pages/Dashboard"

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/curso" element={<Curso />} />
            <Route path="/cursos" element={<Cursos />} />
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
