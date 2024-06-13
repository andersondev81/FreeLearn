import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import PrivateRoute from "./components/PrivateRoute";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import { useEffect, useState } from "react";
import "./App.css";
import Register from "./pages/Register";
import { Courses } from "./pages/Courses";
import DashboardAluno from "./pages/DashboardAluno";
import DashboardProfessor from "./pages/DashboardProfessor";
import Watch from "./components/Watch";
import CourseDetails from "./components/CourseDetails";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isProfessor, setIsProfessor] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const Professor = localStorage.getItem("Professor");

    if (token) {
      setIsAuthenticated(true);
    }

    if (Professor === "true") {
      setIsProfessor(true);
    } else {
      console.log("nao e professor")
      setIsProfessor(false);
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
            <Route path="/cursos" element={<Courses />} />
            <Route
              path="/dashboard"
              element={
                <PrivateRoute
                  component={DashboardAluno}
                  isAuthenticated={isAuthenticated}
                  path="/dashboard"
                />
              }
            />
            <Route
              path="/dashboard/manage"
              element={
                <PrivateRoute
                  component={DashboardProfessor}
                  isAuthenticated={isAuthenticated}
                  isProfessor={isProfessor}
                  path="/dashboard/manage"
                />
              }
            />
            <Route
              path="/watch"
              element={
                <PrivateRoute
                  component={Watch}
                  isAuthenticated={isAuthenticated}
                  path="/watch"
                />
              }
            />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/course/:id" element={<CourseDetails />} /> {/* Adicionar a nova rota */}

          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;