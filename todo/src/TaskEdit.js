import { useState } from "react";

function TaskEdit({ task, onSubmit }) {
  const [title, setTitle] = useState(task.title);

  const handleChange = (e) => {
    setTitle(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(task.id, title);
  }

  return (
    <form onSubmit={handleSubmit} 
    >
      <label>Title</label>
      <input value={title} onChange={handleChange}/>
      <button>Save</button>
    </form>
  )
}

export default TaskEdit;
