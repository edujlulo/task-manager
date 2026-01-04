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
  const [filterValue, setFilterValue] = useState("all");
  const [sortValue, setSortValue] = useState(() => {
    return localStorage.getItem("sortValue") || "oldest";
  });

  useEffect(() => {
    const storedList = JSON.parse(localStorage.getItem("list"));
    if (storedList) {
      setList(storedList);
      const sorted = [...storedList].sort((a, b) =>
        sortValue === "newest"
          ? new Date(b.createdAt) - new Date(a.createdAt)
          : new Date(a.createdAt) - new Date(b.createdAt)
      );
      setRenderList(sorted);
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
    filterList(filterValue);
  }, [list]);

  // Function for filter

  useEffect(() => {
    filterList(filterValue);
  }, [filterValue]);

  function filterList(value) {
    const filters = {
      pending: (t) => !t.checked,
      completed: (t) => t.checked,
    };

    setRenderList(filters[value] ? list.filter(filters[value]) : list);
  }

  // Function for sorting tasks

  useEffect(() => {
    localStorage.setItem("sortValue", sortValue);
    sortTasks(sortValue);
  }, [sortValue]);

  function sortTasks(order = "newest") {
    const sortedList = [...renderList].sort((a, b) => {
      if (order === "newest")
        return new Date(b.createdAt) - new Date(a.createdAt);
      else return new Date(a.createdAt) - new Date(b.createdAt);
    });

    setRenderList(sortedList);
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
      <FilterSort
        filterValue={filterValue}
        setFilterValue={setFilterValue}
        sortValue={sortValue}
        setSortValue={setSortValue}
      />
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
