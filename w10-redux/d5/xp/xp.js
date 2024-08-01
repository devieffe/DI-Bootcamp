// 🌟 Exercise 1: Book Inventory Selector
// Scenario:
// You’re tasked with building a simple book inventory management application using Redux. The application maintains information about various books, including their titles, authors, and genres.

// Instructions:
// Set up Redux Store:

// Create a Redux store with necessary middleware and reducers to manage the book inventory state.
// Define Initial State:

// Set up the initial state with an array of books. Each book should have properties like id, title, author, and genre.
// Selectors Creation:

// Use createSelector from @reduxjs/toolkit to create selectors for filtering books based on their genres.
// Create a selector named selectBooks to retrieve all books from the state.
// Create selectors for specific genres such as selectHorrorBooks, selectFantasyBooks, and selectScienceFictionBooks.
// These selectors should filter and return books belonging to their respective genres.
// Component Implementation:

// Create a React component BookList to display the book inventory.
// Utilize the selectors you created to display different book lists based on genres.
// Display buttons or a dropdown to switch between different genres, triggering the display of books from that genre using appropriate selectors.
// UI Interaction:

// Implement UI interactions to demonstrate selector functionality.
// As users switch between genres, the displayed book list should dynamically update according to the selected genre.
// Test and Validate:

// Test the functionality by switching between different genres and ensuring that the book list updates correctly based on the selected genre.


// Additional Notes:
// Utilize Redux Toolkit for setting up the store and creating reducers.
// Make use of mock data or a hardcoded array of books to simulate the book inventory.
// Use React-Redux to connect your React components with the Redux store.
// Ensure clear separation of concerns between Redux logic and UI components.


// This exercise introduces beginners to createSelector and its usage in filtering and extracting specific data from the Redux store based on different criteria, offering a hands-on experience in implementing selectors for managing state in Redux applications.