import React from 'react';
import Navbar from './Navbar';

const videos = [
  { id: 1, title: 'Introdução e Instalação', embedId: 'oGD4ixajvs8' },
  { id: 2, title: 'Barras de ferramentas e opções', embedId: 'cMsh2PG_XGA' },
  { id: 4, title: 'Como criar um protótipo navegável', embedId: 's9r_fLXbWn4' },
  { id: 5, title: 'Opções de Imagem e Vetor', embedId: 'zT9uwJqM6aM' },
  
];

const FigmaCourse = () => {
  const [activeVideo, setActiveVideo] = React.useState(videos[0]);
  const [isSidebarVisible, setSidebarVisible] = React.useState(true);

  return (
    <>
    <Navbar/>
    <div className="flex h-screen bg-white text-body pt-20"> {/* Increase padding-top here */}
      {isSidebarVisible && (
        <div className="w-1/4 bg-gray-800 text-white overflow-auto">
          <h2 className="text-xl font-bold p-4">Figma app Design </h2>
          <ul>
            {videos.map(video => (
              <li key={video.id} className="p-4 hover:bg-gray-700 cursor-pointer" onClick={() => setActiveVideo(video)}>
                {video.title}
              </li>
            ))}
          </ul>
        </div>
      )}
      <div className="w-3/4 p-4 flex flex-col">
        <button onClick={() => setSidebarVisible(!isSidebarVisible)}>
          {isSidebarVisible ? 'Hide Sidebar' : 'Show Sidebar'}
        </button>
        <h2 className="text-2xl font-bold mb-4">{activeVideo.title}</h2>
        <div className="flex-grow relative">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            title={activeVideo.title}
            src={`https://www.youtube.com/embed/${activeVideo.embedId}`}
            frameBorder="0"
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