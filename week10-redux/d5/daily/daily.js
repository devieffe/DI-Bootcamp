// Daily Challenge: Productivity Tracker
// Instructions:
// You’re tasked with building a productivity tracker that allows users to log their daily tasks and track their progress.

// Redux Setup:

// Set up a Redux store with reducers to manage tasks and categories.
// Define initial states for tasks and categories.
// Actions and Reducers:

// Implement actions to add, edit, delete tasks, add, edit, delete categories, and update task progress.
// Create reducers to handle these actions and update the state accordingly.
// Selectors Creation:

// Use createSelector to build selectors:
// selectTasksByCategory: Returns tasks belonging to a specific category.
// selectCompletedTasks: Computes the count of completed tasks.
// selectCategoryById: Returns category details based on ID.
// Functional Components - TaskList and CategorySelector:

// Build a TaskList component using useSelector to fetch and display tasks based on the selected category.
// Implement a CategorySelector component that utilizes useSelector to fetch categories and enable selection.
// Task Editing and Completion:

// Utilize useCallback to handle task editing and completion efficiently.
// Implement UI elements to edit tasks and mark them as completed.