// Objective:
// Enhance the Age Counter app by integrating Redux Toolkit with Thunk middleware to handle asynchronous actions.



// What You Will Create:
// Building upon the existing Age Counter app, you’ll implement Redux Toolkit’s features combined with Thunk middleware to manage asynchronous actions.



// Daily Challenge : Age Counter With Redux Toolkit And Thunk
// Instructions
// Setup Redux Toolkit:

// Initialize Redux Toolkit in the existing project if not already done.
// Ensure Redux Toolkit is installed and configured properly.

// Redux Actions with Thunk:

// Create ageUpAsync and ageDownAsync functions using Redux Toolkit’s createAsyncThunk.
// Define ageUpAsync to increment the age after a delay using setTimeout.
// Define ageDownAsync to decrement the age after a delay using setTimeout.

// Reducer Modification:

// Adjust the existing reducer to handle the loading state.
// Add a case for LOADING in the reducer to set loading to true.
// Ensure the loading state is set to false when the age increment/decrement is completed.

// Component Modifications:

// Update the existing components to use the new async action creators (ageUpAsync, ageDownAsync) instead of the older synchronous ones.
// Import the React logo (logo.svg) to display as a loading message during asynchronous age changes.
// Update mapStateToProps to include the loading state from the Redux store.
// Conditionally render the logo based on the loading state.

// Applying Thunk Middleware:

// Import applyMiddleware from Redux to apply middleware to the store.
// Use applyMiddleware to pass thunk middleware (included by default in Redux Toolkit) to the createStore function.

// Testing:

// Test the functionality by incrementing and decrementing the age.
// Verify that the loading logo appears during asynchronous age changes and disappears after the update.

// By completing these steps, you’ll enhance the Age Counter app by integrating Redux Toolkit with Thunk middleware, enabling the management of asynchronous actions for age incrementing and decrementing.