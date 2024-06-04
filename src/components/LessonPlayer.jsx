import React from 'react';
import { useParams } from 'react-router-dom';

const LessonPlayer = () => {
  const { embedLink } = useParams();

  return (
    <div className="lesson-player">
      {embedLink ? (
        <iframe
          src={`https://www.youtube.com/embed/${embedLink}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Video Player"
        ></iframe>
      ) : (
        <p>Nenhum vídeo disponível para assistir.</p>
      )}
    </div>
  );
};

export default LessonPlayer;