import React from 'react';
import { connect } from 'react-redux';

const TaskList = ({ tasks }) => {
  return (
    <div>
      <h2>Tasks</h2>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>{task.text}</li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = state => ({
  tasks: state.tasks.tasksByDay[new Date().toLocaleDateString()] || []
});

export default connect(mapStateToProps)(TaskList);
