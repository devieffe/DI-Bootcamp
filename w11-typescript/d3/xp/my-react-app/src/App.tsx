import React from 'react';
import Component from './components/Component';
import Greeting from './components/Greeting';
import Counter from './components/Counter';
import UserCard from './components/UserCard';
import DataFetcher from './components/DataFetcher';

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Welcome to My React App (on TypeScript)</h1>
      <Greeting name="Dave" />
      <Component />
      <Counter />
      <UserCard name="Dani" age={22} />
      <UserCard name="Jake" />
      <UserCard age={25} />
      <UserCard />
      <DataFetcher />
    </div>
  );
};

export default App;