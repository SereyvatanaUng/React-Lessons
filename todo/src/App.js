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
    <div className="background">
      <div className="container">
        <div className="header-container">
          <h1 className="todo-header">Todo List</h1>
        </div>
        <TaskCreate onCreate={createTask} />
      </div>
    </div>
  );
}

export default App;
