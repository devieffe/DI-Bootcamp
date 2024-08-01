import { ADD_TASK, EDIT_TASK, DELETE_TASK } from "./actionTypes";

export const addTask = (day, task) => ({
  type: ADD_TASK,
  payload: { day, task },
});

export const editTask = (day, taskId, updatedTask) => ({
  type: EDIT_TASK,
  payload: { day, taskId, updatedTask },
});

export const deleteTask = (day, taskId) => ({
  type: DELETE_TASK,
  payload: { day, taskId },
});
