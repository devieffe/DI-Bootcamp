// import React, { useState } from 'react';
// import List from './List';
// import { Todo } from './types';

// const TodoApp: React.FC = () => {
//   const [todos, setTodos] = useState<Todo[]>([]);

//   const addTodo = () => {
//     const newTodo: Todo = {
//       id: Date.now(),
//       text: `Todo item ${todos.length + 1}`
//     };
//     setTodos([...todos, newTodo]);
//   };

//   return (
//     <div>
//       <h1>Todo List</h1>
//       <button onClick={addTodo}>Add Todo</button>
//       <List
//         items={todos}
//         renderItem={(todo) => <span>{todo.text}</span>}
//       />
//     </div>
//   );
// };

// export default TodoApp;