// Daily Challenge: Building A TypeScript And React Todo List With Generic Components
// What You Will Learn:

// How to define types for to-do list items using TypeScript.
// How to create a generic List component in React that can display different types of items.
// How to use TypeScript generics to customize how each item in a list is rendered.
// How to manage the state of a to-do list using React’s useState hook.
// How to add new to-do items to the list and manage the state.
// Description:
// In this daily challenge, you will build a to-do list application using TypeScript and React. The goal is to create a generic List component that can display a list of items with different types (e.g., strings, objects) while allowing the caller to customize how each item is rendered. Use TypeScript generics and the useState hook to manage the to-do list.

// Explanation:
// In this exercise, you create a to-do list application using TypeScript, React, and generics. The application includes a generic List component that can display a list of items with different types, allowing the caller to customize how each item is rendered.

// Todo Type: Define the Todo type, representing the structure of a to-do item, which includes an id and text property.

// Generic List Component: Create a generic List component that accepts an array of items and a rendering function (renderItem). The List component uses the renderItem function to render each item in the list.

// Main TodoApp Component: The TodoApp component uses the useState hook to manage the list of to-dos. It initializes the state with an array of to-do items.

// Adding New To-Do: Define a function addTodo that creates a new to-do item with a unique id and the current timestamp as the text. Add the new to-do item to the state using the setTodos function.

// Rendering the App: Use the generic List component to render the list of to-dos. The renderItem function specifies how to render each to-do item.

// This daily challenge exercise demonstrates how to use TypeScript generics and React to build a flexible list component that can handle different types of items while maintaining type safety and providing a simple to-do list application.