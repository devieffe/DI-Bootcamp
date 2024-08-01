import React, { useState } from 'react';

function App() {
  const [languages, setLanguages] = useState([
    { name: 'Php', votes: 0 },
    { name: 'Python', votes: 0 },
    { name: 'JavaScript', votes: 0 },
    { name: 'Java', votes: 0 },
  ]);

  const voteForLanguage = (index) => {
    const newLanguages = languages.map((language, i) => {
      if (i === index) {
        return { ...language, votes: language.votes + 1 };
      }
      return language;
    });
    setLanguages(newLanguages);
  };

  return (
    <div className="App">
      <h1>Vote for Your Favorite Programming Language</h1>
      <ul>
        {languages.map((language, index) => (
          <li key={index}>
            <span>{language.name} - Votes: {language.votes}</span>
            <button onClick={() => voteForLanguage(index)}>Vote</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;