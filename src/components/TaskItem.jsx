import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { faSquare } from "@fortawesome/free-regular-svg-icons";
import { faSquareCheck } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";
import ItemEdit from "./ItemEdit";

export default function TaskItem({
  task,
  removeTask,
  toggleTaskCompletion,
  isEditing,
  setIsEditing,
  taskEdition,
}) {
  const [showItemEdit, setShowItemEdit] = useState(false);

  function showItemEditComponent() {
    setShowItemEdit(!showItemEdit);
    setIsEditing(true);
  }

  return (
    <li className="listBox">
      <div>
        {!showItemEdit && (
          <div className={task.checked ? "completedTask" : ""}>{task.text}</div>
        )}
        {showItemEdit && <ItemEdit task={task} taskEdition={taskEdition} />}
        <div className="dateMessage">
          Created on: {new Date(task.createdAt).toLocaleString()}
        </div>
      </div>
      <div className="buttonGroup">
        <button
          className={`checkBox ${isEditing ? "disabled" : ""}`}
          onClick={() => toggleTaskCompletion(task.id)}
          disabled={isEditing}
        >
          <FontAwesomeIcon icon={task.checked ? faSquareCheck : faSquare} />
        </button>
        <button
          className={`editButton ${isEditing ? "disabled" : ""}`}
          onClick={() => showItemEditComponent()}
          disabled={isEditing}
        >
          <FontAwesomeIcon icon={faPenToSquare} />
        </button>
        <button
          className={`deleteButton ${isEditing ? "disabled" : ""}`}
          onClick={() => removeTask(task.id)}
          disabled={isEditing}
        >
          <FontAwesomeIcon icon={faTrashCan} />
        </button>
      </div>
    </li>
  );
}
