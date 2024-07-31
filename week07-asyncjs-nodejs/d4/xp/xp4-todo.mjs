// Define the Task class to store each task's details
class Task {
    constructor(description) {
      this.description = description;
      this.isComplete = false;
    }
  
    complete() {
      this.isComplete = true;
    }
  }
  
  export class TodoList {
    constructor() {
      this.tasks = [];
    }
  
    addTask(description) {
      const task = new Task(description);
      this.tasks.push(task);
    }
  
    completeTask(index) {
      if (index >= 0 && index < this.tasks.length) {
        this.tasks[index].complete();
      } else {
        console.log('Wrong task index');
      }
    }
  
    listTasks() {
      this.tasks.forEach((task, index) => {
        const status = task.isComplete ? '✓' : '✗';
        console.log(`${index + 1}. [${status}] ${task.description}`);
      });
    }
  }
  