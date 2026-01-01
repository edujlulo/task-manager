import { useState } from "react";
import TaskItem from "./TaskItem";

export default function TaskList({ list, removeTask, toggleTaskCompletion }) {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <ul>
      {list.map((t, i) => (
        <TaskItem
          key={i}
          task={t}
          index={i}
          removeTask={removeTask}
          toggleTaskCompletion={toggleTaskCompletion}
          isEditing={isEditing}
          setIsEditing={setIsEditing}
        />
      ))}
    </ul>
  );
}
