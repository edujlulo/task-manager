import TaskItem from "./TaskItem";

export default function TaskList({ list, removeTask }) {
  return (
    <ul>
      {list.map((t, i) => (
        <TaskItem key={i} task={t} index={i} removeTask={removeTask} />
      ))}
    </ul>
  );
}
