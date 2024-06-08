import React, { useEffect, useState } from "react";
import axios from "axios";

const DashboardAluno = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    // Fetch dos cursos do usuário
    const fetchUserCourses = async () => {
      try {
        const storedId = localStorage.getItem("ID");
        const token = localStorage.getItem("token");

        const response = await axios.get(
          `http://localhost:4430/courses/get-user-courses/${storedId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        // Setar os cursos no estado, já incluindo o embedLink
        const coursesWithEmbedLink = response.data.map((course) => ({
          ...course,
          embedLink: `https://www.youtube.com/embed/${course.link}`, // Supondo que embedId é retornado pela API
        }));
        setCourses(coursesWithEmbedLink);
      } catch (error) {
        console.error("Error fetching user courses:", error);
      }
    };

    fetchUserCourses();
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

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {courses.map((course) => (
          <div key={course._id} className="shadow-xl rounded-lg">
            <img className="" src={course.image} alt="" />
            <div className="p-8">
              <h3 className="text-2xl font-semibold mb-2 text-headingcolor">
                {course.name}
              </h3>
              <button
                onClick={() => handleWatch(course.embedLink)}
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
