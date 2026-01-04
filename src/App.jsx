import "./App.css";
import { useState, useEffect } from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import FilterSort from "./components/FilterSort";

export default function App() {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);
  const [error, setError] = useState(false);
  const [checkedBox, setCheckedBox] = useState(false);
  const [renderList, setRenderList] = useState([]);

  useEffect(() => {
    const storedList = JSON.parse(localStorage.getItem("list"));
    if (storedList) {
      setList(storedList);
      setRenderList(storedList);
    }
  }, []);

  // Tasks adition to list function

  const addTask = (e) => {
    if (e) e.preventDefault();

    if (task.trim() === "") {
      setError(true);
      return;
    }

    const newTask = {
      id: crypto.randomUUID(),
      text: task,
      createdAt: new Date(),
      checked: false,
    };

    const updatedList = [...list, newTask];
    setList(updatedList);
    localStorage.setItem("list", JSON.stringify(updatedList));
    setTask("");
    setError(false);
  };

  const removeTask = (taskId) => {
    const updatedList = list.filter((task) => task.id !== taskId);
    setList(updatedList);
    localStorage.setItem("list", JSON.stringify(updatedList));
  };

  // List modifications for rendering

  useEffect(() => {
    setRenderList(list);
  }, [list]);

  // Function for filter

  function filterList(value) {
    let updatedList = [];
    if (value === "pending") {
      updatedList = list.filter((t) => t.checked === false);
    } else if (value === "completed") {
      updatedList = list.filter((t) => t.checked === true);
    } else {
      updatedList = list;
    }
    setRenderList(updatedList);
  }

  // Check box for toggle task completion

  function toggleTaskCompletion(taskId) {
    const updatedList = list.map((task) =>
      task.id === taskId ? { ...task, checked: !task.checked } : task
    );

    setList(updatedList);
    localStorage.setItem("list", JSON.stringify(updatedList));
  }

  // Function for tasks edition

  function taskEdition(id, newText) {
    const updatedList = list.map((task) =>
      task.id === id ? { ...task, text: newText } : task
    );
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
      <FilterSort filterList={filterList} />
      <div id="listContainer">
        <TaskList
          renderList={renderList}
          removeTask={removeTask}
          toggleTaskCompletion={toggleTaskCompletion}
          taskEdition={taskEdition}
        />
      </div>
    </div>
  );
}
