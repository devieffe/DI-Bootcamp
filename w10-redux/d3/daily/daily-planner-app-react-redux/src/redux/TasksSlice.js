import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: {}
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      const { date, task } = action.payload;
      if (!state.tasks[date]) {
        state.tasks[date] = [];
      }
      state.tasks[date].push({ id: Date.now(), text: task, completed: false });
    },
    editTask: (state, action) => {
      const { date, id, text } = action.payload;
      const taskList = state.tasks[date] || [];
      const task = taskList.find(t => t.id === id);
      if (task) {
        task.text = text;
      }
    },
    deleteTask: (state, action) => {
      const { date, id } = action.payload;
      state.tasks[date] = (state.tasks[date] || []).filter(task => task.id !== id);
    },
    toggleTask: (state, action) => {
      const { date, id } = action.payload;
      const task = (state.tasks[date] || []).find(t => t.id === id);
      if (task) {
        task.completed = !task.completed;
      }
    }
  }
});

export const { addTask, editTask, deleteTask, toggleTask } = tasksSlice.actions;
export default tasksSlice.reducer;