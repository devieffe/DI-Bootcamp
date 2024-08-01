import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectTasksByCategory } from '../redux/selectors';
import { updateTaskProgress, editTask, deleteTask } from '../redux/tasksSlice';

const TaskList = ({ categoryId }) => {
  const dispatch = useDispatch();
  const tasks = useSelector(selectTasksByCategory(categoryId));

  const handleToggleComplete = (id) => {
    dispatch(updateTaskProgress(id));
  };

  const handleEditTask = (id, newTitle) => {
    dispatch(editTask({ id, title: newTitle }));
  };

  const handleDeleteTask = (id) => {
    dispatch(deleteTask(id));
  };

  return (
    <div>
      <h2>Tasks</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleToggleComplete(task.id)}
            />
            <input
              type="text"
              value={task.title}
              onChange={(e) => handleEditTask(task.id, e.target.value)}
            />
            <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
