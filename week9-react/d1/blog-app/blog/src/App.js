import logo from './logo.svg';
import './App.css';
import React from 'react';
import UserFavoriteAnimals from './UserFavoriteAnimals';
import Exercise from './Exercise3';

const myelement = <h1>I Love JSX!</h1>;

const sum = [5 + 5];

const user = {
  firstName: 'Bob',
  lastName: 'Dylan',
  favAnimals : ['Horse','Turtle','Elephant','Monkey']
};


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello, world!</p>
        <p>
          {myelement}
        </p>
        <p>React is {sum} times better with JSX</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>User info:</p>
        <h3>{user.firstName}</h3>
        <h3>{user.lastName}</h3>
        <>
          <UserFavoriteAnimals favs={user.favAnimals} />
          <Exercise></Exercise>
        </>
      </header>
    </div>
  );
}

export default App;
