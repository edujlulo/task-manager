import "./App.css";
import { useState, useEffect } from "react";

export default function App() {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);

  // setList(JSON.parse(localStorage.getItem("list")));

  useEffect(() => {
    const storedList = JSON.parse(localStorage.getItem("list"));
    if (storedList) {
      setList(storedList);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

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
