import React from 'react';

interface GreetingProps {
  name: string;
}

const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return (
    <div>
      <h2>Hello, {name}!</h2>
    </div>
  );
};

export default Greeting;
