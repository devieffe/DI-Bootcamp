import React, { useState, useRef } from "react";
import { useTasks } from "./TaskContext";
import "./TaskList.css";

function TaskList() {
  const { state, dispatch } = useTasks();
  const [editId, setEditId] = useState(null);
  const inputRef = useRef(null);

  // Handle adding a new task
  const handleAddTask = (text) => {
    if (text.trim() === "") return;
    dispatch({ type: "ADD_TASK", text });
  };

  // Handle task editing
  const handleEditTask = (id) => {
    const newText = inputRef.current.value;
    if (newText.trim() === "") return;
    dispatch({ type: "EDIT_TASK", id, text: newText });
    setEditId(null);
  };

  // Handle task filtering
  const handleFilterChange = (filter) => {
    dispatch({ type: "FILTER_TASKS", filter });
  };

  // Function to determine which tasks to display based on the filter
  const filteredTasks = state.tasks.filter((task) => {
    if (state.filter === "all") return true;
    if (state.filter === "completed") return task.completed;
    if (state.filter === "active") return !task.completed;
    return true;
  });

  return (
    <div className="task-manager">
      <h1>Task Manager</h1>
      <div className="task-input">
        <input
          type="text"
          placeholder="Add a new task"
          ref={inputRef}
        />
        <button onClick={() => handleAddTask(inputRef.current.value)}>Add Task</button>
      </div>
      <div className="filter-buttons">
        <button onClick={() => handleFilterChange("all")}>All</button>
        <button onClick={() => handleFilterChange("completed")}>Completed</button>
        <button onClick={() => handleFilterChange("active")}>Active</button>
      </div>
      <ul>
        {filteredTasks.map((task) => (
          <li key={task.id} className={task.completed ? "completed" : ""}>
            {editId === task.id ? (
              <>
                <input
                  type="text"
                  defaultValue={task.text}
                  ref={inputRef}
                />
                <button onClick={() => handleEditTask(task.id)}>Save</button>
                <button onClick={() => setEditId(null)}>Cancel</button>
              </>
            ) : (
              <>
                <span onClick={() => dispatch({ type: "TOGGLE_TASK", id: task.id })}>
                  {task.text}
                </span>
                <button onClick={() => setEditId(task.id)}>Edit</button>
                <button onClick={() => dispatch({ type: "REMOVE_TASK", id: task.id })}>
                  Remove
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;