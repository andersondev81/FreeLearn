import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Cursos = () => {
  const [projects, setProjects] = useState([]);
  const [token, setToken] = useState(""); // Estado para armazenar o token
  const [userId, setId] = useState(""); // Estado para armazenar o ID do usuário

  useEffect(() => {
    // Obtenha o token armazenado de onde você o tem (por exemplo, do localStorage)
    const storedToken = localStorage.getItem("token");
    const storedId = localStorage.getItem("ID");
    if (storedToken) {
      setToken(storedToken);
      // Obter o ID do usuário armazenado (supondo que seja armazenado como "userId")
      const storedId = localStorage.getItem("ID");
      if (storedId) {
        setId(storedId);
      }
    }

    // Faça a solicitação GET para a API com o token no cabeçalho
    fetch("http://localhost:4430/get", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${storedToken}`, // Inclua o token no cabeçalho da solicitação
      },
    })
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error("Error fetching courses:", error));
  }, []);

  const handleEnroll = (courseId) => {
    // Recuperando o ID do localStorage
    const storedId = localStorage.getItem('ID');
  
    // Aqui você fará uma solicitação para o backend para adicionar o curso ao usuário
    fetch(`http://localhost:4430/courses/add-course-to-user/${storedId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`, // Inclua o token no cabeçalho da solicitação
      },
      body: JSON.stringify({ course_id: courseId }), // Passando o ID do curso no corpo da solicitação
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Course enrolled successfully:", data);
        // Você pode realizar alguma ação adicional após a inscrição bem-sucedida, se necessário
      })
      .catch((error) => console.error("Error enrolling in course:", error));
  };

  return (
    <>
      <div className="lg:mx-12 mx-4 my-32" id="portfolio">
        <div className="mb-20 flex flex-col sm:flex-row md:items-center justify-between gap-5">
          <div>
            <h2 className="md:text-5xl text-4xl text-headingcolor font-bold">
              Nossos principais cursos
            </h2>
          </div>
        </div>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
  {projects && projects.length > 0 ? (
    projects.map((project) => (
      <div key={project._id} className="shadow-xl rounded-lg">
        <img className="" src={project.image} alt="" />
        <div className="p-8">
          <h3 className="text-2xl font-semibold mb-2 text-headingcolor">
            {project.name}
          </h3>
          <p className="text-body mb-4">{project.description}</p>
          <button
            onClick={() => handleEnroll(project._id)} 
            className="underline underline-offset-8"
          >
            Inscrever-se
          </button>
        </div>
      </div>
    ))
  ) : (
    <p>Nenhum curso disponível no momento.</p>
  )}
</div>

      </div>
    </>
  );
};
