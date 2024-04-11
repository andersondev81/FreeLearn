import React from 'react';
import Navbar from './Navbar';

const videos = [
  { id: 1, title: 'Começa aqui seu curso de PHP Moderno', embedId: 'TfsO0BGvGn0' },
  { id: 2, title: 'Esse curso de PHP serve pra mim?s de ferramentas e opções', embedId: 'dLHlHTsFqvk' },
  { id: 4, title: 'Por que um elefante é o mascote do PHP? ', embedId: '4kSJOJEi0aQ' },
  { id: 5, title: 'Como funciona o PHP? ', embedId: 'qFLWokqyYb4' },
  
];

const FigmaCourse = () => {
  const [activeVideo, setActiveVideo] = React.useState(videos[0]);

  return (
    <>
    <Navbar/>
    <div className="flex h-screen bg-white text-body pt-20"> {/* Increase padding-top here */}
    
        <div className="w-1/4 bg-gray-800 text-white overflow-auto">
          <h2 className="text-xl font-bold p-4">PHP para iniciantes</h2>
          <ul>
            {videos.map(video => (
              <li key={video.id} className="p-4 hover:bg-gray-700 cursor-pointer" onClick={() => setActiveVideo(video)}>
                {video.title}
              </li>
            ))}
          </ul>
        </div>
      
      <div className="w-3/4 p-4 flex flex-col">
        <h2 className="text-2xl font-bold mb-4">{activeVideo.title}</h2>
        <div className="flex-grow relative">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src={`https://www.youtube.com/embed/${activeVideo.embedId}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
    </>
  );
}

export default FigmaCourse;