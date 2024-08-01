import React, { createContext, useContext, useReducer } from "react";

const TaskContext = createContext();

const initialState = {
  tasks: [],
  filter: "all", // Filter options: 'all', 'completed', 'active'
};

// Reducer function to manage task-related actions
function taskReducer(state, action) {
  switch (action.type) {
    case "ADD_TASK":
      return {
        ...state,
        tasks: [...state.tasks, { id: Date.now(), text: action.text, completed: false }],
      };
    case "EDIT_TASK":
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.id ? { ...task, text: action.text } : task
        ),
      };
    case "REMOVE_TASK":
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.id),
      };
    case "TOGGLE_TASK":
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.id ? { ...task, completed: !task.completed } : task
        ),
      };
    case "FILTER_TASKS":
      return {
        ...state,
        filter: action.filter,
      };
    default:
      return state;
  }
}

function TaskProvider({ children }) {
  const [state, dispatch] = useReducer(taskReducer, initialState);

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
}

function useTasks() {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useTasks must be used within a TaskProvider");
  }
  return context;
}

export { TaskProvider, useTasks };