import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const CourseList = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    // Simulating fetching courses from an API
    const fetchCourses = async () => {
      const response = await fetch('/api/courses');
      const data = await response.json();
      setCourses(data);
    };
    fetchCourses();
  }, []);

  return (
    <div className="course-list">
      {courses.map((course) => (
        <div key={course._id} className="course-item">
          <img src={course.image} alt={course.name} />
          <div className="course-info">
            <h2>{course.name}</h2>
            <p>{course.description}</p>
            <Link to={`/course/${course._id}`}>Ver Detalhes</Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CourseList;

