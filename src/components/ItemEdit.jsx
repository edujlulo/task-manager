import { useEffect, useState } from "react";

export default function ItemEdit({ task }) {
  const [editInputValue, setEditInputValue] = useState("");

  useEffect(() => {
    setEditInputValue(task.text);
  }, []);

  return (
    <>
      <form>
        <input
          value={editInputValue}
          onChange={(e) => setEditInputValue(e.target.value)}
        />
        <button>Done</button>
        <button>Cancel</button>
      </form>
    </>
  );
}
