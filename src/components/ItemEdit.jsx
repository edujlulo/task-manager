import "./ItemEdit.css";
import { useEffect, useState } from "react";

export default function ItemEdit({
  task,
  taskEdition,
  setShowItemEdit,
  showItemEdit,
  setIsEditing,
}) {
  const [editInputValue, setEditInputValue] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    setEditInputValue(task.text);
  }, []);

  function checkEdition(e) {
    e.preventDefault();
    if (editInputValue.trim() === "") {
      setError(true);
      return;
    }
    taskEdition(task.id, editInputValue);
    setShowItemEdit(!showItemEdit);
    setIsEditing(false);
  }

  return (
    <>
      <form id="edit-form">
        <div id="input-container">
          <input
            autoFocus
            className="edit-input"
            value={editInputValue}
            onChange={(e) => {
              setEditInputValue(e.target.value);
              setError(false);
            }}
          />
          {error && (
            <p id="errorMessageEdit" className="errorMessage">
              Please enter a valid value
            </p>
          )}
        </div>
        <div className="buttons">
          <button className="done-button" onClick={(e) => checkEdition(e)}>
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
