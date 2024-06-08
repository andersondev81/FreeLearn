import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import PrivateRoute from "./components/PrivateRoute";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import { useEffect, useState } from "react";
import "./App.css";
import Register from "./components/Register";
import { Cursos } from "./pages/Cursos";
import DashboardAluno from "./pages/DashboardAluno";
import DashboardProfessor from "./pages/DashboardProfessor";
import Watch from "./components/Watch";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isProfessor, setIsProfessor] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const professor = localStorage.getItem("professor");

    if (token) {
      setIsAuthenticated(true);
    }

    if (professor === "true") {
      setIsProfessor(true);
    }
  }, []);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/cursos" element={<Cursos />} />
            <Route
              path="/dashboard"
              element={
                <PrivateRoute
                  element={<DashboardAluno />}
                  isAuthenticated={isAuthenticated}
                />
              }
            />
            <Route
              path="/dashboard/manage"
              element={
                <PrivateRoute
                  element={<DashboardProfessor />}
                  isAuthenticated={isAuthenticated}
                  isProfessor={isProfessor}
                />
              }
            />
            <Route
              path="/watch"
              element={
                <PrivateRoute
                  element={<Watch />}
                  isAuthenticated={isAuthenticated}
                />
              }
            />

            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
