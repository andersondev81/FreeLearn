import React, { useEffect, useState } from "react";
import SearchForm from "../components/SearchForm";

export const Courses = () => {
  const [projects, setProjects] = useState([]);
  const [token, setToken] = useState(""); 
  const [userId, setId] = useState(""); 

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedId = localStorage.getItem("ID");
    if (storedToken) {
      setToken(storedToken);
      if (storedId) {
        setId(storedId);
      }
    }

    fetchCourses();
  }, []);

  const fetchCourses = (query = "") => {
    const url = query
      ? `http://localhost:4430/search?q=${query}`
      : "http://localhost:4430/get";
    
    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error("Error fetching courses:", error));
  };

  const handleEnroll = (courseId) => {
    const storedId = localStorage.getItem("ID");

    fetch(`http://localhost:4430/courses/add-course-to-user/${storedId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ course_id: courseId }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Course enrolled successfully:", data);
      })
      .catch((error) => console.error("Error enrolling in course:", error));
  };

  const handleSearch = (query) => {
    fetchCourses(query);
  };

  return (
    <>
      <div className="min-h-[700px] lg:mx-12 mx-4  [h-screen]" id="portfolio">
        <div className="flex flex-col sm:flex-row md:items-center justify-between gap-5">
          <div>
            <h2 className="md:text-5xl text-4xl text-headingcolor font-bold my-20">
              Nossos principais cursos
              <div className="mr-20 text-2xl my-5">
              <SearchForm onSearch={handleSearch} />
              </div>
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
