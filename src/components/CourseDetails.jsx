import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const CourseDetails = () => {
  const { id } = useParams(); // Obter o ID do curso a partir dos parâmetros da URL
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [rating, setRating] = useState('');
  const [review, setReview] = useState('');
  const [error, setError] = useState('');
  const token = localStorage.getItem('token');
  const userId = localStorage.getItem('ID');

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

  const handleSubmitRating = async (e) => {
    e.preventDefault();

    const numericRating = parseInt(rating, 10);
    if (isNaN(numericRating) || numericRating < 1 || numericRating > 5) {
      setError('A nota deve estar entre 1 e 5.');
      return;
    }

    try {
      const response = await axios.post(`http://localhost:4430/courses/rate/${id}`, {
        user_id: userId,
        score: numericRating, // Enviar como número
        review: review
      }, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      setCourse(prevCourse => ({
        ...prevCourse,
        ratings: [...prevCourse.ratings, response.data]
      }));

      setRating('');
      setReview('');
      setError('');
    } catch (error) {
      console.error("Error submitting rating:", error);
      setError('Erro ao enviar a avaliação.');
    }
  };

  if (loading) {
    return <p className="text-center mt-20 text-lg">Carregando...</p>;
  }

  if (!course) {
    return <p className="text-center mt-20 text-lg">Curso não encontrado.</p>;
  }

  return (
    <div className="max-w-4xl mx-auto p-8">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <img className="w-full h-64 object-cover" src={course.image} alt={course.name} />
        <div className="p-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{course.name}</h1>
          <p className="text-gray-700 mb-6">{course.description}</p>
          <div className="modules mb-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Módulos</h2>
            {course.modules.map((module, index) => (
              <div key={index} className="mb-4">
                <h3 className="text-xl font-medium text-gray-700 mb-2">{module.name}</h3>
                <ul className="list-disc list-inside ml-4">
                  {module.lessons.map((lesson, idx) => (
                    <li key={idx} className="text-gray-600">{lesson.name}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="ratings mb-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Avaliações</h2>
            {course.ratings && course.ratings.length > 0 ? (
              course.ratings.map((rating, index) => (
                <div key={index} className="rating mb-4">
                  <p className="text-yellow-500 font-bold">Nota: {rating.score}</p>
                  <p className="text-gray-600">{rating.review}</p>
                </div>
              ))
            ) : (
              <p className="text-gray-600">Este curso ainda não possui avaliações.</p>
            )}
          </div>
          <div className="add-rating">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Adicionar Avaliação</h2>
            <form onSubmit={handleSubmitRating}>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="rating">
                  Nota
                </label>
                <input
                  id="rating"
                  type="number"
                  value={rating}
                  onChange={(e) => setRating(e.target.value)}
                  min="1"
                  max="5"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="review">
                  Comentário
                </label>
                <textarea
                  id="review"
                  value={review}
                  onChange={(e) => setReview(e.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              {error && <p className="text-red-500 text-xs italic mb-4">{error}</p>}
              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Enviar Avaliação
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
