import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const CourseDetails = () => {
  const { id } = useParams(); // Obter o ID do curso a partir dos parâmetros da URL
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchCourseDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:4430/courses/get/${id}`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        setCourse(response.data);
      } catch (error) {
        console.error("Error fetching course details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourseDetails();
  }, [id, token]);

  if (loading) {
    return <p>Carregando...</p>;
  }

  if (!course) {
    return <p>Curso não encontrado.</p>;
  }

  return (
    <div className="course-details">
      <h1>{course.name}</h1>
      <img src={course.image} alt={course.name} />
      <p>{course.description}</p>
      <div className="modules">
        <h2>Módulos</h2>
        {course.modules.map((module, index) => (
          <div key={index}>
            <h3>{module.name}</h3>
            <ul>
              {module.lessons.map((lesson, idx) => (
                <li key={idx}>{lesson.name}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="ratings">
        <h2>Avaliações</h2>
        {course.ratings && course.ratings.length > 0 ? (
          course.ratings.map((rating, index) => (
            <div key={index} className="rating">
              <p><strong>Nota:</strong> {rating.score}</p>
              <p><strong>Comentário:</strong> {rating.review}</p>
            </div>
          ))
        ) : (
          <p>Este curso ainda não possui avaliações.</p>
        )}
      </div>
    </div>
  );
};

export default CourseDetails;
