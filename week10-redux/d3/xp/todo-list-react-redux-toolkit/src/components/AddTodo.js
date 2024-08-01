import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/TodoSlice';

function AddTodo() {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleAddClick = () => {
    if (text.trim()) {
      dispatch(addTodo(text));
      setText('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new todo"
      />
      <button onClick={handleAddClick}>Add Todo</button>
    </div>
  );
}

export default AddTodo;
