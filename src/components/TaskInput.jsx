import "./TaskInput.css";

export default function TaskInput({ task, setTask, addTask, error, setError }) {
  return (
    <form id="task-form" onSubmit={addTask}>
      <div className="input-row">
        <label htmlFor="taskInput">Task:</label>
        <input
          id="taskInput"
          value={task}
          onChange={(e) => {
            setTask(e.target.value);
            if (error) setError(false);
          }}
          placeholder="Write your task here"
          autoFocus
        />
      </div>
      <button type="submit">Add</button>
      {error && <p className="error-message">Please enter a valid value</p>}
    </form>
  );
}
