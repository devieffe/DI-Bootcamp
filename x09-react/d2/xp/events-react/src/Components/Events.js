import React, { useState } from 'react';

function Events() {
  const clickMe = () => {
    alert('I was clicked');
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      alert(`You entered: ${event.target.value}`);
    }
  };

  const [isToggleOn, setIsToggleOn] = useState(true);

  const toggleState = () => {
    setIsToggleOn((prevState) => !prevState);
  };

  return (
    <div>
      <button onClick={clickMe}>Click me</button>
      <input type="text" onKeyDown={handleKeyDown} placeholder="Type and press Enter" />
      <button onClick={toggleState}>
        {isToggleOn ? 'ON' : 'OFF'}
      </button>
    </div>
  );
}

export default Events;
