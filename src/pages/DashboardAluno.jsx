import axios from 'axios';
import { useEffect, useState } from 'react';

const DashboardAluno = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    // Recuperando o ID e o token do localStorage
    const storedId = localStorage.getItem('ID');
    const token = localStorage.getItem('token');

    // Fazendo a solicitação para a API
    axios.get(`http://localhost:4430/courses/get-user-courses/${storedId}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
      .then((response) => {
        // Armazenando os cursos no estado
        setCourses(response.data);
      })
      .catch((error) => {
        console.error("Error fetching courses:", error);
      });
  }, []);

  return (
    <div className="lg:mx-12 mx-4 my-32" id="portfolio">
      <div className="mb-20 flex flex-col sm:flex-row md:items-center justify-between gap-5">
        <div>
          <h2 className="md:text-5xl text-4xl text-headingcolor font-bold">
            Meus Cursos
          </h2>
        </div>
      </div>

      {/* project card */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {courses.map((course) => (
          <div key={course._id} className="shadow-xl rounded-lg">
            <img className="" src={course.image} alt="" />
            <div className="p-8">
              <h3 className="text-2xl font-semibold mb-2 text-headingcolor">
                {course.name}
              </h3>
              <button
                  className="px-7 py-2 bg-transparent border border-black text-black rounded hover:bg-black hover:text-white transition-all duration-300"
                >
                  Assistir
             </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardAluno;