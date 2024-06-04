// CourseDetail.jsx
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const CourseDetail = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    // Simulating fetching course details from an API
    const fetchCourse = async () => {
      const response = await fetch(`/api/courses/${id}`);
      const data = await response.json();
      setCourse(data);
    };
    fetchCourse();
  }, [id]);

  if (!course) return <div>Carregando...</div>;

  return (
    <div className="course-detail">
      <h1>{course.name}</h1>
      <p>{course.description}</p>
      {course.modules.map((module) => (
        <div key={module.name} className="course-module">
          <h2>{module.name}</h2>
          <ul>
            {module.lessons.map((lesson) => (
              <li key={lesson.link}>
                <Link to={`/lesson/${lesson.link}`}>{lesson.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default CourseDetail;