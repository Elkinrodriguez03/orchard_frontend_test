import React, { useState } from 'react';
import { ImageConfig } from '../types/types';
import '../App.css';

const ImageCard: React.FC<ImageConfig> = ({ imageSrc, altText, title, description }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className={`card ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={imageSrc} alt={altText} />
      <div className="card-text">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ImageCard;