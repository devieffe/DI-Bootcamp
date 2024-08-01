import React, { useState } from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import DatePicker from "./DatePicker";
import TaskForm from "./TaskForm";
import ConnectedTaskList from "./TaskList";

function App() {
  const [selectedDay, setSelectedDay] = useState("2024-08-01");

  return (
    <Provider store={store}>
      <div className="App">
        <h1>Daily Planner</h1>
        <DatePicker onDateChange={setSelectedDay} />
        <TaskForm selectedDay={selectedDay} />
        <ConnectedTaskList selectedDay={selectedDay} />
      </div>
    </Provider>
  );
}

export default App;