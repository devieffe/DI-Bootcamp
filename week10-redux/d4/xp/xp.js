// Exercise 1: Fetching User Data With Redux Thunk
// Instructions
// Create a simple React-Redux application that fetches and displays user data from an API using Redux Thunk for asynchronous logic.



// Step 1: Set Up Redux Store With Thunk Middleware
// Initialize Store:
// Use Redux Toolkit’s configureStore to create the Redux store.
// Include the necessary middleware, such as redux-thunk, to handle asynchronous logic.

// Step 2: Define Redux Slice For User Data
// User Data Slice:
// Utilize createSlice from Redux Toolkit to define a slice for managing user data.
// Define initial state to hold user information or an empty object.
// Create reducers for:
// Handling successful fetching and storing of user data.
// Handling errors if the API request fails.


// Step 3: Implement Thunk Action Creator
// Thunk Action Creator:
// Create a Thunk action creator that makes an API call to fetch user data.
// Use asynchronous logic within the Thunk to perform the API request.
// Dispatch appropriate actions based on the response (success/failure).


// Step 4: Create React Component For Displaying User Data
// UserData Component:
// Develop a component to display the fetched user data.
// Use useSelector to access user data from the Redux store state.


// Step 5: Connect Component To Redux Store
// Use useSelector and useDispatch Hooks:
// Within the UserData component, utilize useSelector to access user data from the Redux store.
// Dispatch the Thunk action using useDispatch to trigger the API call and update the store.


// Step 6: Test Functionality
// Fetch User Data:

// Test fetching user data by triggering the Thunk action creator.
// Verify that the user data is retrieved from the mock API endpoint.

// Display User Data:

// Ensure that the UserData component displays the fetched user data obtained from the Redux store.

// Error Handling:

// Test error handling by simulating a failed API request and verify that the appropriate error actions are dispatched and handled in the store.


// By following these steps, you’ll build a React-Redux application utilizing Redux Thunk to fetch user data from an API. Testing the functionality ensures the successful retrieval and display of user data while handling errors in case of unsuccessful API requests.