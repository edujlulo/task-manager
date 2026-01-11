import { useState } from "react";
import TaskItem from "./TaskItem";
import "./TaskList.css";

export default function TaskList({
  renderList,
  removeTask,
  toggleTaskCompletion,
  taskEdition,
}) {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <ul>
      {renderList.map((t) => (
        <TaskItem
          key={t.id}
          task={t}
          removeTask={removeTask}
          toggleTaskCompletion={toggleTaskCompletion}
          isEditing={isEditing}
          setIsEditing={setIsEditing}
          taskEdition={taskEdition}
        />
      ))}
    </ul>
  );
}
