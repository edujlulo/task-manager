import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { faSquare } from "@fortawesome/free-regular-svg-icons";
import { faSquareCheck } from "@fortawesome/free-regular-svg-icons";

export default function TaskItem({
  task,
  index,
  removeTask,
  toggleTaskCompletion,
}) {
  return (
    <li className="listBox">
      <div>
        <div className={task.checked ? "completedTask" : ""}>{task.text}</div>
        <div className="dateMessage">
          Created on: {new Date(task.createdAt).toLocaleString()}
        </div>
      </div>
      <div className="buttonGroup">
        <button
          className="checkBox"
          onClick={() => toggleTaskCompletion(index)}
        >
          <FontAwesomeIcon icon={task.checked ? faSquareCheck : faSquare} />
        </button>
        <button className="editButton">
          <FontAwesomeIcon icon={faPenToSquare} />
        </button>
        <button className="buttonList" onClick={() => removeTask(index)}>
          <FontAwesomeIcon icon={faTrashCan} />
        </button>
      </div>
    </li>
  );
}
