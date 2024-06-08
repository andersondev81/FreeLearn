import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

const Watch = () => {
  const location = useLocation();
  const courseId = new URLSearchParams(location.search).get("courseId");
  const [course, setCourse] = useState(null);
  const [activeLesson, setActiveLesson] = useState(null);
  const token = localStorage.getItem("token");

  useEffect(() => {
    async function fetchCourse() {
      try {
        const response = await axios.get(
          `http://localhost:4430/courses/get/${courseId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setCourse(response.data);
        setActiveLesson(response.data.modules[0].lessons[0]);
      } catch (error) {
        console.error("Erro ao buscar curso:", error);
      }
    }
    fetchCourse();
  }, [courseId, token]);

  return (
    <>
      <div className="flex h-screen bg-white text-body pt-20">
        <div className="w-1/4 bg-gray-800 text-white overflow-auto">
          {course && (
            <>
              <h2 className="text-xl font-bold p-4">{course.name}</h2>
              {course.modules.map((module, index) => (
                <div key={index}>
                  <h3 className="p-4 font-semibold">{module.name}</h3>
                  <ul>
                    {module.lessons.map((lesson, idx) => (
                      <li
                        key={idx}
                        className="p-4 hover:bg-gray-700 cursor-pointer"
                        onClick={() => setActiveLesson(lesson)}
                      >
                        {lesson.name}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </>
          )}
        </div>
        <div className="w-3/4 p-4 flex flex-col">
          {activeLesson ? (
            <>
              <h2 className="text-2xl font-bold mb-4">{activeLesson.name}</h2>
              <div className="flex-grow relative">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${activeLesson.link}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </>
          ) : (
            <p>Selecione uma aula para assistir</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Watch;
