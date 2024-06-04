// src/components/DashboardProfessor.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DashboardProfessor = () => {
  const [courses, setCourses] = useState([]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [link, setLink] = useState('');
  const [modules, setModules] = useState([{ name: '', lessons: [{ name: '', link: '' }] }]);

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
        link,
        modules
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

  const addModule = () => {
    setModules([...modules, { name: '', lessons: [{ name: '', link: '' }] }]);
  };

  const addLesson = (moduleIndex) => {
    const newModules = [...modules];
    newModules[moduleIndex].lessons.push({ name: '', link: '' });
    setModules(newModules);
  };

  const handleModuleChange = (moduleIndex, field, value) => {
    const newModules = [...modules];
    newModules[moduleIndex][field] = value;
    setModules(newModules);
  };

  const handleLessonChange = (moduleIndex, lessonIndex, field, value) => {
    const newModules = [...modules];
    newModules[moduleIndex].lessons[lessonIndex][field] = value;
    setModules(newModules);
  };

  return (
    <div className="p-5">
      <h1 className="text-4xl font-bold mb-6 text-center">Dashboard do Professor</h1>

      <div className="mb-8 bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Adicionar Novo Curso</h2>
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <input className="border p-3 rounded-md flex-1" type="text" placeholder="Nome" value={name} onChange={(e) => setName(e.target.value)} />
          <input className="border p-3 rounded-md flex-1" type="text" placeholder="Descrição" value={description} onChange={(e) => setDescription(e.target.value)} />
          <input className="border p-3 rounded-md flex-1" type="text" placeholder="URL da Imagem" value={image} onChange={(e) => setImage(e.target.value)} />
          <input className="border p-3 rounded-md flex-1" type="text" placeholder="Link" value={link} onChange={(e) => setLink(e.target.value)} />
        </div>

        {modules.map((module, moduleIndex) => (
          <div key={moduleIndex} className="mb-4 bg-gray-100 p-4 rounded-md">
            <h3 className="text-xl font-semibold mb-2">Módulo {moduleIndex + 1}</h3>
            <input className="border p-2 rounded-md mb-2 w-full" type="text" placeholder="Nome do Módulo" value={module.name} onChange={(e) => handleModuleChange(moduleIndex, 'name', e.target.value)} />
            {module.lessons.map((lesson, lessonIndex) => (
              <div key={lessonIndex} className="mb-2">
                <input className="border p-2 rounded-md mb-2 w-full" type="text" placeholder="Nome da Aula" value={lesson.name} onChange={(e) => handleLessonChange(moduleIndex, lessonIndex, 'name', e.target.value)} />
                <input className="border p-2 rounded-md w-full" type="text" placeholder="Link da Aula" value={lesson.link} onChange={(e) => handleLessonChange(moduleIndex, lessonIndex, 'link', e.target.value)} />
              </div>
            ))}
            <button className="bg-green-500 text-white p-2 rounded-md hover:bg-green-600 transition-all" onClick={() => addLesson(moduleIndex)}>Adicionar Aula</button>
          </div>
        ))}
        <button className="bg-blue-500 text-white p-3 mt-4 rounded-md hover:bg-blue-600 transition-all" onClick={addModule}>Adicionar Módulo</button>
        <button className="bg-blue-500 text-white p-3 mt-4 rounded-md hover:bg-blue-600 transition-all" onClick={postCourse}>Criar Curso</button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses && courses.map((course) => (
          <div key={course._id} className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src={course.image} alt={course.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{course.name}</h2>
              <p className="text-gray-600 mb-4">{course.description}</p>
              <a href={course.link} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">Link para o curso</a>
              <button className="bg-red-500 text-white p-2 mt-4 w-full rounded-md hover:bg-red-600 transition-all" onClick={() => deleteCourse(course._id)}>Excluir</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardProfessor;
