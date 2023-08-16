import { useState } from "react";
import TaskCreate from "./TaskCreate";
function App() {
  const [tasks, setTasks] = useState([]);

  const createTask = (title) => {
    const updatedTasks = [...tasks, { title }];
    setTasks(updatedTasks);
  };

  return <TaskCreate onCreate={createTask} />;
}

export default App;
