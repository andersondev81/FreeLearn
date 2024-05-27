import React from 'react';
import Navbar from './Navbar';
import { useLocation } from 'react-router-dom';

const WatchVideo = () => {
  const location = useLocation();
  const embedLink = new URLSearchParams(location.search).get("embedLink");

  return (
    <>
      <div className="flex h-screen bg-white text-body pt-20">
        <div className="w-3/4 p-4 flex flex-col">
          <div className="flex-grow relative">
            {embedLink && (
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={`https://www.youtube.com/embed/${embedLink}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            )}
            {!embedLink && (
              <p>Nenhum vídeo disponível para assistir.</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default WatchVideo;
