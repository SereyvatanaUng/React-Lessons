import { useState } from "react";
import "./TaskCreate.css";

function TaskCreate({ onCreate }) {
  const [title, setTitle] = useState("");

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate(title);
    setTitle("");
  };

  return (
    <div>
      <h3>Add a Task</h3>
      <form onSubmit={handleSubmit}>
        <div className="">
          <label>Title</label>
          <input value={title} onChange={handleChange} />
        </div>
        <button>+</button>
      </form>
    </div>
  );
}

export default TaskCreate;
