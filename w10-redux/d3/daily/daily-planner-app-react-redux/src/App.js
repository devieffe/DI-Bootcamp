import React, { useState } from 'react';
import DatePicker from './components/TaskList';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';

function App() {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);

  return (
    <div className="App">
      <h1>Daily Planner</h1>
      <DatePicker selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
      <AddTask date={selectedDate} />
      <TaskList date={selectedDate} />
    </div>
  );
}

export default App;