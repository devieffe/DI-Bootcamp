
ex2: Implement A Character Counter
Objective: Create a React component that displays a character counter for a text input. The counter should update in real-time as the user types using the useRef hook.
Set up a new React project using create-react-app or your preferred method.
Create a component that includes a text input and a counter display.
Use the useRef hook to create a reference to the text input element.
Implement an event handler that listens for changes in the text input.
Use the useRef reference to track the length of the text in the input and update the counter display accordingly.
Hints:
You can use the inputRef.current.value.length property to get the length of the text in the input.
Attach an event listener to the text input’s input event to listen for changes in the input.
Example Starter Code:
Here’s a simplified example to get you started:
import React, { useRef } from "react";
import "./App.css";
function CharacterCounter() {
  const inputRef = useRef(null);
  const handleInputChange = () => {
    const textLength = inputRef.current.value.length;
    // Update the character count based on textLength
  };
  return (
    <div>
      <h1>Character Counter</h1>
      <textarea
        ref={inputRef}
        onChange={handleInputChange}
        placeholder="Type something..."></textarea>
      <p>Character Count: {/* Display character count here */}</p>
    </div>
  );
}
function App() {
  return (
    <div className="App">
      <CharacterCounter />
    </div>
  );
}
export default App;

