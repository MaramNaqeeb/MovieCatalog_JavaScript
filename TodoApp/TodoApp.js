function Todo(id, taskName, description, due_date, priority, complete) {
  this.id = id;
  this.taskName = taskName;
  this.description = description;
  this.due_date = due_date;
  this.priority = priority;
  this.complete = complete;
}

const choices = () => {
  console.log(
    `    Welcome to Todo App, choose of these numbers: 
    *********************************************
    1. Add a New Task.
    2. List All Tasks.
    3. Sort the List by Due-Date. 
    4. Sort the List by Priority.
    5. Mark a Task as Done.
    6. List Completed Tasks.
    7. Delete one task by id.
    8. Delete the Whole List. 
    0. Exit the Application.
    ********************************************** `
  );
};
("use strict");
const ps = require("prompt-sync");

const prompt = ps();
var list = new Array();

const addTask = () => {
  Object.prototype.id = Math.floor(Math.random() * 1000);
  Object.prototype.taskName = prompt("Enter task name: ");
  Object.prototype.description = prompt("Enter task description: ");
  Object.prototype.due_date = prompt(
    "Enter the due date. Example format: 2019,1,24  "
  );
  Object.prototype.priority = prompt(
    "Enter stars to assign priority. Example format: ***  "
  );
  Object.prototype.complete = false;
  var todos = new Todo(id, taskName, description, due_date, priority, complete);

  list.push(todos);
  console.log(todos);
};
const listAllTasks = () => {
  list.map((list) =>
    console.log(
      `Task id: ${list.id}  task name: ${list.taskName}  description: ${list.description}  due date: ${list.due_date}  priority: ${list.priority} complete: ${list.complete}`
    )
  );
};

const sortByDueDate = () => {
  list.sort((a, b) => new Date(a.due_date) - new Date(b.due_date));

  listAllTasks();
};

const sortByPriority = () => {
  list.sort((c, d) => {
    if (c.priority > d.priority) {
      return 1;
    }
    if (c.priority < d.priority) {
      return -1;
    }
    return 0;
  });

  listAllTasks();
};

const markAsDone = () => {
  Object.prototype.id = prompt("Enter id number: ");

  var x = list.findIndex((obj) => obj.id == id);

  list[x] = { complete: true };

  listAllTasks();
};

const ListCompletedTasks = () => {
  list = list.filter((x) => x.complete == true);
  listAllTasks();
};

const delteOneTask = () => {
  Object.prototype.id = prompt("Enter id number: ");
  list = Array.from(list);

  const objWithIdIndex = list.findIndex((obj) => obj.id === id);
  list.splice(objWithIdIndex, 1);

  listAllTasks();
};
const deleteAllTaskes = () => {
  list.length = 0;
  console.log(list);
  listAllTasks();
};

const whileLoop = () => {
  while (true) {
    choices();
    const userInput = prompt(`Choose a Number `);
    switch (userInput) {
      case "1": {
        addTask();
        break;
      }
      case "2": {
        listAllTasks();
        break;
      }
      case "3": {
        markAsDone();
        break;
      }
      case "4": {
        ListCompletedTasks();
        break;
      }

      case "5": {
        sortByDueDate();
        break;
      }

      case "6": {
        sortByPriority();
        break;
      }

      case "7": {
        delteOneTask();
        break;
      }
      case "8": {
        deleteAllTaskes();
        break;
      }
      case "0": {
        process.exit();
      }
      default:
        break;
    }
  }
};
whileLoop();
