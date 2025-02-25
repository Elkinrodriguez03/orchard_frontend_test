import React from 'react';
import ImageCard from './ImageCard';
import '../App.css';

const TasteColors: React.FC = () => {
  return (
    <div>
      <div className='title'>
        <h1>TASTE THE COLOURS</h1>
        <hr />
      </div>
      <div className="taste-container">
        <ImageCard
          imageSrc="red.svg"
          altText="Red Color"
          title="Red"
          description="Red foods remind us of berries and soft fruits, so we anticipate a sweet taste."
        />
        <ImageCard
          imageSrc="green.svg"
          altText="Green Color"
          title="Green"
          description="Fresh, zingy green colours are reminiscent of unripe fruit, promising sour or acid flavours."
        />
        <ImageCard
          imageSrc="white.svg"
          altText="White Color"
          title="White"
          description="White foods evoke memories of salt and salty flavours, driving the expectation of a savoury treat."
        />
      </div>
    </div>
  );
};

export default TasteColors;