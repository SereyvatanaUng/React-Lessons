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
    console.log(title);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="input-form">
        <label>Title</label>
        <input value={title} onChange={handleChange} />
        <button>+</button>
      </form>
    </div>
  );
}

export default TaskCreate;
