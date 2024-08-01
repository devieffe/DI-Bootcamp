import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, toggleTask } from '../redux/TasksSlice';

function TaskList({ date }) {
  const tasks = useSelector(state => state.tasks.tasks[date] || []);
  const dispatch = useDispatch();

  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>
          <span
            style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
            onClick={() => dispatch(toggleTask({ date, id: task.id }))}
          >
            {task.text}
          </span>
          <button onClick={() => dispatch(deleteTask({ date, id: task.id }))}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
