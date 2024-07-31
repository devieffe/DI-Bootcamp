import { TodoList } from './xp4-todo.mjs';

const todoList = new TodoList();

todoList.addTask('Read newspaper');
todoList.addTask('Make coffee');
todoList.addTask('Do exercises');

todoList.completeTask(1);

console.log('Tasks:');
todoList.listTasks();
