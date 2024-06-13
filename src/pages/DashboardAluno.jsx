import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const DashboardAluno = () => {
  const [courses, setCourses] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserCourses = async () => {
      try {
        const storedId = localStorage.getItem('ID');
        const token = localStorage.getItem('token');
        
        const response = await axios.get(`http://localhost:4430/courses/get-user-courses/${storedId}`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        setCourses(response.data || []);
      } catch (error) {
        console.error("Error fetching user courses:", error);
        setCourses([]);
      }
    };

    fetchUserCourses();
  }, []);

  const handleWatch = (courseId) => {
    navigate(`/watch?courseId=${courseId}`);
  };

  const handleDetails = (courseId) => {
    navigate(`/course/${courseId}`); // Adicionar navegação para os detalhes do curso
  };

  return (
    <div className="lg:mx-12 mx-4 my-32" id="portfolio">
      <div className="mb-20 flex flex-col sm:flex-row md:items-center justify-between gap-5">
        <div>
          <h2 className="md:text-5xl text-4xl text-headingcolor font-bold">
            Meus Cursos
          </h2>
        </div>
      </div>

      {courses === null ? (
      <p>Carregando...</p>
    ) : (!Array.isArray(courses) || courses.length === 0) ? (
      <p>Não há cursos ainda.</p>
    ) : (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {courses.map((course) => (
          <div key={course._id} className="shadow-xl rounded-lg">
            <img className="" src={course.image} alt={course.name} />
            <div className="p-8">
              <h3 className="text-2xl font-semibold mb-2 text-headingcolor">
                {course.name}
              </h3>
                <button
                  onClick={() => handleWatch(course._id)}
                  className="px-7 py-2 bg-transparent border border-black text-black rounded hover:bg-black hover:text-white transition-all duration-300"
                >
                  Assistir
                </button>
                <button
                  onClick={() => handleDetails(course._id)}
                  className="px-7 py-2 ml-4 bg-transparent border border-black text-black rounded hover:bg-black hover:text-white transition-all duration-300"
                >
                  Detalhes
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DashboardAluno;
