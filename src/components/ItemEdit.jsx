import "./ItemEdit.css";
import { useEffect, useState } from "react";

export default function ItemEdit({ task, taskEdition }) {
  const [editInputValue, setEditInputValue] = useState("");

  useEffect(() => {
    setEditInputValue(task.text);
  }, []);

  return (
    <>
      <form id="edit-form">
        <input
          className="edit-input"
          value={editInputValue}
          onChange={(e) => setEditInputValue(e.target.value)}
        />
        <div className="buttons">
          <button
            className="done-button"
            onClick={() => taskEdition(task.id, editInputValue)}
          >
            DONE
          </button>
          <button
            className="cancel-button"
            onClick={() => taskEdition(task.id, task.text)}
          >
            CANCEL
          </button>
        </div>
      </form>
    </>
  );
}
