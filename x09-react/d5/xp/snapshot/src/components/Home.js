import React from 'react';
import { useNavigate } from 'react-router-dom';

const categories = ['Mountain', 'Beaches', 'Birds', 'Food'];

const Home = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    navigate(`/search?query=${category}`);
  };

  return (
    <div>
      <h1>Snap Shot Gallery</h1>
      <div>
        {categories.map((category) => (
          <button key={category} onClick={() => handleCategoryClick(category)}>
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Home;