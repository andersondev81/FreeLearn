import React, { useState, useEffect } from "react"
import logo from "../assets/logo.svg"
import { HiMenu } from "react-icons/hi"
import { useLocation } from "react-router-dom"
import { HashLink as LinkRoute } from "react-router-hash-link"
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSticky, setIsSticky] = useState(false)
  const location = useLocation()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header className="w-full  top-0 left-0 right-0">
      <nav
        className={`py-4 md:px-12 px-4 bg-white ${
          isSticky ? "sticky top-0 right-0 left-0 bg-white" : ""
        }`}
      >
        <div className="flex items-center justify-between">
          <div className="text-white font-bold text-lg cursor-pointer">
            <LinkRoute to="/">
              <img src={logo} alt="" className="h-10" />
            </LinkRoute>
          </div>

          {/* for larger device */}
          <div className="lg:flex items-center gap-3 hidden text-body">
            <LinkRoute
              className={`block  hover:text-primary py-2 px-4 cursor-pointer ${
                location.pathname === "/" ? "text-primary" : ""
              }`}
              to="/"
            >
              HOME
            </LinkRoute>
            <LinkRoute
              className="block  hover:text-gray-400 py-2 px-4 cursor-pointer"
              smooth
              to="/cursos"
            >
              CURSOS
            </LinkRoute>
            <LinkRoute
              className={`block  hover:text-primary py-2 px-4 cursor-pointer ${
                location.pathname === "/faq" ? "text-primary" : ""
              }`}
              to="/sobre"
              smooth
            >
              SOBRE
            </LinkRoute>
            <LinkRoute
              className={`block  hover:text-primary py-2 px-4 cursor-pointer ${
                location.pathname === "/faq" ? "text-primary" : ""
              }`}
              to="/dashboard"
              smooth
            >
              DASHBOARD
            </LinkRoute>

          </div>

          {/* contact me btn */}
          <div className="lg:block hidden">
            <button className="px-4 py-2 bg-transparent border border-primary text-primary rounded hover:bg-primary hover:text-white transition-all duration-300">
              <LinkRoute to="/login">Login</LinkRoute>
            </button>
            <button className="px-4 py-2 bg-transparent border border-primary text-primary rounded hover:bg-primary hover:text-white transition-all duration-300">
              <LinkRoute to="/register">Cadastrar</LinkRoute>
            </button>
          </div>

          {/* btn for small devices */}
          <button onClick={toggleMenu} className="lg:hidden text-body text-3xl">
            <HiMenu />
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="mt-4 bg-body p-4 rounded-lg text-blue">
            <LinkRoute
              className={`block  hover:text-primary py-2 px-4 cursor-pointer ${
                location.pathname === "/" ? "text-primary" : ""
              }`}
              to="/"
            >
              HOME
            </LinkRoute>

            <LinkRoute
              className={`block  hover:text-primary py-2 px-4 cursor-pointer ${
                location.pathname === "/cursos" ? "text-primary" : ""
              }`}
              to="/cursos"
            >
              CURSOS
            </LinkRoute>

            <LinkRoute
              className={`block  hover:text-primary py-2 px-4 cursor-pointer ${
                location.pathname === "/sobre" ? "text-primary" : ""
              }`}
              to="/sobre"
            >
              SOBRE
            </LinkRoute>

            <LinkRoute
              smooth
              to="/dashboard"
              className="block  hover:text-gray-400 py-2 px-4 cursor-pointer"
            >
              DASHBOARD
            </LinkRoute>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Navbar
