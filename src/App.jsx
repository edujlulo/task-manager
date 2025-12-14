import "./App.css";
import { useState, useEffect } from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";

export default function App() {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);
  const [error, setError] = useState(false);
  const [checkedBox, setCheckedBox] = useState(false);

  useEffect(() => {
    const storedList = JSON.parse(localStorage.getItem("list"));
    if (storedList) setList(storedList);
  }, []);

  const addTask = (e) => {
    if (e) e.preventDefault();

    if (task.trim() === "") {
      setError(true);
      return;
    }

    const newTask = { text: task, createdAt: new Date(), checked: false };

    const updatedList = [...list, newTask];
    setList(updatedList);
    localStorage.setItem("list", JSON.stringify(updatedList));
    setTask("");
    setError(false);
  };

  const removeTask = (i) => {
    const updatedList = list.filter((_, index) => index !== i);
    setList(updatedList);
    localStorage.setItem("list", JSON.stringify(updatedList));
  };

  // Check box for toggle task completion

  function toggleTaskCompletion(i) {
    const updatedList = [...list];
    updatedList[i].checked = !updatedList[i].checked;
    setList(updatedList);
    localStorage.setItem("list", JSON.stringify(updatedList));
  }

  return (
    <div className="container">
      <TaskInput
        task={task}
        setTask={setTask}
        addTask={addTask}
        error={error}
        setError={setError}
      />
      {error && <p className="errorMessage">Please enter a valid value</p>}
      <div id="listContainer">
        <TaskList
          list={list}
          removeTask={removeTask}
          toggleTaskCompletion={toggleTaskCompletion}
        />
      </div>
    </div>
  );
}
