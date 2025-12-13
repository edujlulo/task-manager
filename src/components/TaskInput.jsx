export default function TaskInput({ task, setTask, addTask, error, setError }) {
  return (
    <form id="form" onSubmit={addTask}>
      <label>Task: </label>
      <input
        value={task}
        onChange={(e) => {
          setTask(e.target.value);
          if (error) setError(false);
        }}
        placeholder="Write your task here"
        autoFocus
      />
      <button type="submit" onClick={addTask}>
        Add
      </button>
    </form>
  );
}
