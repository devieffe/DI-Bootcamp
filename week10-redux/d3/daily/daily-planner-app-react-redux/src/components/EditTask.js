import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editTask } from '../redux/TasksSlice';

function EditTask({ date, task }) {
  const [newText, setNewText] = useState(task.text);
  const dispatch = useDispatch();

  const handleEditTask = () => {
    if (newText.trim()) {
      dispatch(editTask({ date, id: task.id, text: newText }));
    }
  };

  return (
    <div>
      <input
        type="text"
        value={newText}
        onChange={(e) => setNewText(e.target.value)}
      />
      <button onClick={handleEditTask}>Save</button>
    </div>
  );
}

export default EditTask;