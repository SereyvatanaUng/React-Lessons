import "./App.css";
import { useState } from "react";
import TaskCreate from "./TaskCreate";

function App() {
  const [tasks, setTasks] = useState([]);

  const createTask = (title) => {
    const updatedTasks = [...tasks, { title }];
    setTasks(updatedTasks);
  };

  return (
    <div className="container">
      <Header />

      <TaskCreate onCreate={createTask} />
    </div>
  );
}

function Header() {
  return(
  <div className="header">
    <h1 className="todo-header">Todo List</h1>
  </div>);
}

function TaskShow() {}

export default App;
