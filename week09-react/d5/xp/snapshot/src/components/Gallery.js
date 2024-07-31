import React, { useState } from 'react';
import ImageCard from './ImageCard'; 
import './Gallery.css'; 

const Gallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <div className="gallery">
      {selectedImage && (
        <div className="image-detail">
          <button onClick={() => setSelectedImage(null)}>Close</button>
          <img src={selectedImage.src.large} alt={selectedImage.alt} />
          <p>{selectedImage.photographer}</p>
        </div>
      )}
      <div className="image-grid">
        {images.map((image) => (
          <div key={image.id} className="image-card" onClick={() => handleClick(image)}>
            <img src={image.src.small} alt={image.alt} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;