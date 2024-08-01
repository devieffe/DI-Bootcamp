import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: [
     { id: 1, title: 'Project', categoryId: 1, completed: true },
     { id: 2, title: 'Report', categoryId: 1, completed: false },
     { id: 3, title: 'Fitness', categoryId: 2, completed: false },
     { id: 4, title: 'Hobby', categoryId: 3, completed: true },
     { id: 5, title: 'Leisure', categoryId: 3, completed: false },
  ],
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    editTask: (state, action) => {
      const { id, title } = action.payload;
      const task = state.tasks.find((task) => task.id === id);
      if (task) {
        task.title = title;
      }
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    updateTaskProgress: (state, action) => {
      const task = state.tasks.find((task) => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
    },
  },
});

export const { addTask, editTask, deleteTask, updateTaskProgress } = tasksSlice.actions;
export default tasksSlice.reducer;