import "./App.css";
import { useState } from "react";

export default function App() {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);

  function addTask() {
    setList([...list, task]);
    setTask("");
  }

  return (
    <>
      <div className="container">
        <form id="form">
          <label>Task: </label>
          <input value={task} onChange={(e) => setTask(e.target.value)}></input>
          <button type="button" onClick={addTask}>
            Add
          </button>
        </form>

        <ul>
          {list.map((t, i) => {
            return (
              <li key={i}>
                {t}
                <button
                  id="buttonList"
                  onClick={() => {
                    setList(list.filter((_, index) => index !== i));
                  }}
                >
                  X
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
