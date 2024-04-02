import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import Testimonial from "./components/Testimonial";
import About from "./components/About"; 
import Login from './components/Login';

import './App.css';
import Faq from './components/Faq';
import Cursos from './components/Cursos';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
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
        } />
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/faq' element={<Faq/>}></Route>
        <Route path='/cursos' element={<Cursos/>}></Route>
      </Routes>
    </Router>
  )
}

export default App;