import "./App.css";
import { useState, useEffect } from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import FilterSort from "./components/FilterSort";

export default function App() {
  // State
  const [task, setTask] = useState("");
  const [list, setList] = useState(() => {
    const stored = JSON.parse(localStorage.getItem("list"));
    return stored
      ? stored.map((t) => ({ ...t, createdAt: new Date(t.createdAt) }))
      : [];
  });
  const [renderList, setRenderList] = useState([]);
  const [error, setError] = useState(false);
  const [filterValue, setFilterValue] = useState("all");
  const [sortValue, setSortValue] = useState(() => {
    return localStorage.getItem("sortValue") || "oldest";
  });

  // Persist list to localStorage
  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  // Persist sortValue to localStorage
  useEffect(() => {
    localStorage.setItem("sortValue", sortValue);
  }, [sortValue]);

  // Compute filtered + sorted list whenever list, filterValue, or sortValue changes
  useEffect(() => {
    let updatedList = [...list];

    // Filter
    const filters = {
      pending: (t) => !t.checked,
      completed: (t) => t.checked,
    };
    if (filters[filterValue]) {
      updatedList = updatedList.filter(filters[filterValue]);
    }

    // Sort
    updatedList.sort((a, b) =>
      sortValue === "newest"
        ? new Date(b.createdAt) - new Date(a.createdAt)
        : new Date(a.createdAt) - new Date(b.createdAt)
    );

    setRenderList(updatedList);
  }, [list, filterValue, sortValue]);

  // Add new task
  const addTask = (e) => {
    e.preventDefault();
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

    setList([...list, newTask]);
    setTask("");
    setError(false);
  };

  // Remove task
  const removeTask = (taskId) => {
    setList(list.filter((t) => t.id !== taskId));
  };

  // Toggle task completion
  const toggleTaskCompletion = (taskId) => {
    setList(
      list.map((t) => (t.id === taskId ? { ...t, checked: !t.checked } : t))
    );
  };

  // Edit task text
  const taskEdition = (taskId, newText) => {
    setList(list.map((t) => (t.id === taskId ? { ...t, text: newText } : t)));
  };

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
