import { createSelector } from '@reduxjs/toolkit';

// Selector to get all tasks
export const selectTasks = (state) => state.tasks.tasks;

// Selector to get all categories
export const selectCategories = (state) => state.categories.categories;

// Selector to get tasks by category
export const selectTasksByCategory = (categoryId) =>
  createSelector([selectTasks], (tasks) =>
    tasks.filter((task) => task.categoryId === categoryId)
  );

// Selector to get completed tasks
export const selectCompletedTasks = createSelector([selectTasks], (tasks) =>
  tasks.filter((task) => task.completed)
);

// Selector to get category by ID
export const selectCategoryById = (categoryId) =>
  createSelector([selectCategories], (categories) =>
    categories.find((category) => category.id === categoryId)
  );