import "./App.css"
import About from "./components/About"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import Portfolio from "./components/Portfolio"
import Skills from "./components/Skills"
import Testimonial from "./components/Testimonial"

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Skills />
      <About />
      <Portfolio />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  )
}

export default App
