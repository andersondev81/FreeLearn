import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DashboardProfessor = () => {
  const [courses, setCourses] = useState([]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [link, setLink] = useState('');

  const token = localStorage.getItem('token');

  useEffect(() => {
    getAllCourses();
  }, []);

  const getAllCourses = async () => {
    try {
      const response = await axios.get('http://localhost:4430/get', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      setCourses(response.data);
    } catch (error) {
      console.error('Error fetching courses:', error);
    }
  };

  const postCourse = async () => {
    try {
      await axios.post('http://localhost:4430/courses/post', {
        name,
        description,
        image,
        link
      }, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      getAllCourses();
    } catch (error) {
      console.error('Error creating course:', error);
    }
  };

  const deleteCourse = async (_id) => {
    try {
      await axios.delete(`http://localhost:4430/courses/delete/${_id}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      getAllCourses();
    } catch (error) {
      console.error('Error deleting course:', error);
    }
  };

  return (
    <div className="p-5">
      <h1 className="text-3xl mb-4">Dashboard Professor</h1>

      <div className="mb-4">
        <input className="border p-2 mr-2" type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <input className="border p-2 mr-2" type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
        <input className="border p-2 mr-2" type="text" placeholder="Image URL" value={image} onChange={(e) => setImage(e.target.value)} />
        <input className="border p-2 mr-2" type="text" placeholder="Link" value={link} onChange={(e) => setLink(e.target.value)} />
        <button className="bg-blue-500 text-white p-2" onClick={postCourse}>Create Course</button>
      </div>

      {courses && courses.map((course) => {
  console.log(course);
  return (
    <div key={course.id} className="border p-2 mb-2">
      <h2 className="text-xl">{course.name}</h2>
      <p>{course.description}</p>
      <img src={course.image} alt={course.name} />
      <a href={course.link}>Link to course</a>
      <button className="bg-red-500 text-white p-2 ml-2" onClick={() => deleteCourse(course._id)}>Delete</button>
    </div>
  );
})}
    </div>
  );
};

export default DashboardProfessor;
