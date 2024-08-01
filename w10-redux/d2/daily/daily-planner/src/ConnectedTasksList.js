import { connect } from "react-redux";
import { addTask, editTask, deleteTask } from "./actions";
import TaskList from "./TaskList";
import TaskForm from "./TaskFormq";

const mapStateToProps = (state, ownProps) => ({
  tasks: state.tasksByDay[ownProps.selectedDay] || [],
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onAddTask: (taskText) => dispatch(addTask(ownProps.selectedDay, taskText)),
  onEditTask: (taskId, updatedTask) =>
    dispatch(editTask(ownProps.selectedDay, taskId, updatedTask)),
  onDeleteTask: (taskId) => dispatch(deleteTask(ownProps.selectedDay, taskId)),
});

const ConnectedTaskList = connect(mapStateToProps, mapDispatchToProps)(TaskList);

export default ConnectedTaskList;