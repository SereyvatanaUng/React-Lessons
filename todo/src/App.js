import { useState } from "react";
import TaskCreate from "./components/TaskCreate";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);

  const editTaskById = (id, newTitle) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, title: newTitle };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const deleteTaskById = (id) => {
    const updatedTasks = tasks.filter((task) => {
      return task.id !== id;
    });
    setTasks(updatedTasks);
  };

  const createTask = (title) => {
    const updatedTasks = [...tasks, { id: Date.now(), title }];
    setTasks(updatedTasks);
  };

  return (
    <div className="container">
      <Header />
      <TaskCreate onCreate={createTask} />
      <TaskList onEdit={editTaskById} tasks={tasks} onDelete={deleteTaskById} />
    </div>
  );
}

function Header() {
  return (
    <div className="header">
      <h1 className="todo-header">Todo List</h1>
    </div>
  );
}

export default App;
