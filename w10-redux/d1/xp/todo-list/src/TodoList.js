import React, { useReducer, useState } from "react";
import "./TodoList.css";

function todoReducer(state, action) {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, { id: Date.now(), text: action.text }];
    case "REMOVE_TODO":
      return state.filter((todo) => todo.id !== action.id);
    default:
      return state;
  }
}

function TodoList() {
  const [todos, dispatch] = useReducer(todoReducer, []);
  const [todoText, setTodoText] = useState("");
  const handleAddTodo = () => {
    if (todoText.trim() === "") return; 
    dispatch({ type: "ADD_TODO", text: todoText }); 
    setTodoText(""); 
  };
  const handleRemoveTodo = (id) => {
    dispatch({ type: "REMOVE_TODO", id }); 
  };
  return (
    <div className="todo-list">
      <h1>Todo List</h1>
      <input
        type="text"
        placeholder="Add a new todo"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
        className="todo-input"
      />
      <button onClick={handleAddTodo} className="add-todo-button">
        Add Todo
      </button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className="todo-item">
            {todo.text}
            <button
              onClick={() => handleRemoveTodo(todo.id)}
              className="remove-todo-button"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;