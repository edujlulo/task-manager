import "./App.css";
import { useState, useEffect } from "react";

export default function App() {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);
  const [error, setError] = useState(false);

  // setList(JSON.parse(localStorage.getItem("list")));

  useEffect(() => {
    const storedList = JSON.parse(localStorage.getItem("list"));
    if (storedList) {
      setList(storedList);
    }
  }, []);

  function addTask() {
    if (task.trim() === "") {
      setError(true);

      return;
    }

    setList(() => {
      const updatedList = [...list, task];
      localStorage.setItem("list", JSON.stringify(updatedList));
      setError(false);

      return updatedList;
    });
    setTask("");
  }

  function removeTask(i) {
    setList(() => {
      const updatedList = list.filter((_, index) => index !== i);
      localStorage.setItem("list", JSON.stringify(updatedList));

      return updatedList;
    });
  }

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      addTask();
    }
  };

  return (
    <>
      <div className="container">
        <form id="form">
          <label>Task: </label>
          <input
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Write your task here"
            onKeyDown={handleKeyPress}
            autoFocus
          ></input>
          <button type="button" onClick={addTask}>
            Add
          </button>
        </form>

        {error && <p className="errorMessage">Please enter a valid value</p>}

        <div id="listContainer">
          <ul>
            {list.map((t, i) => {
              return (
                <li key={i}>
                  {t}
                  <button id="buttonList" onClick={() => removeTask(i)}>
                    X
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}
