import { useState } from "react";
import TaskEdit from "./TaskEdit";

function TaskShow({ task, onDelete, onEdit }) {
  const [showEdit, setShowEdit] = useState(false);

  const handleDeleteClick = () => {
    onDelete(task.id);
  };

  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };

  const handleSubmit = (id, newTitle) => {
    setShowEdit(false);
    onEdit(id, newTitle);
  };

  let content = <h3>{task.title}</h3>;
  if (showEdit) {
    content = <TaskEdit onSubmit={handleSubmit} task={task} />;
  }

  return (
    <div>
      <input type="checkbox" />
      <div>{content}</div>
      <div>
        <button onClick={handleEditClick}>Edit</button>
        <button onClick={handleDeleteClick}>Delete</button>
      </div>
    </div>
  );
}

export default TaskShow;
