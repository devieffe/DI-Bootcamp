import React from 'react';
import './ImageCard.css'; 

const ImageCard = ({ image }) => (
  <div className="image-card">
    <img src={image.src.medium} alt={image.alt} />
    <div className="image-info">
      <p>{image.alt}</p>
    </div>
  </div>
);

export default ImageCard;