import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ImageCard from './ImageCard';
import './SearchPage.css';

const API_KEY = 'mByQZAXIKGhdtYwxdwhfaWS6JxNPrOPfKNF3zKT4diIoEVKVwnlDl4cT';

const SearchPage = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState(new URLSearchParams(window.location.search).get('query') || '');
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(30);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(`https://api.pexels.com/v1/search`, {
          headers: {
            Authorization: API_KEY,
          },
          params: {
            query,
            page,
            per_page: perPage,
          },
        });
        setImages(response.data.photos);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, [query, page, perPage]);

  return (
    <div>
      <h1>Search Results for "{query}"</h1>
      <div className="gallery">
        {images.map((image) => (
          <ImageCard key={image.id} image={image} />
        ))}
      </div>
      <div className="pagination">
        <button onClick={() => setPage(page - 1)} disabled={page === 1}>
          Previous
        </button>
        <button onClick={() => setPage(page + 1)}>Next</button>
      </div>
    </div>
  );
};

export default SearchPage;