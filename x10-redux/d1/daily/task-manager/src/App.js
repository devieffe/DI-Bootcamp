import React from "react";
import { TaskProvider } from "./TaskContext";
import TaskList from "./TaskList";
import "./App.css";

function App() {
  return (
    <TaskProvider>
      <div className="App">
        <TaskList />
      </div>
    </TaskProvider>
  );
}

export default App;