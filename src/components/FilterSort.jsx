import { useState } from "react";
import "./FilterSort.css";

export default function FilterSort() {
  const [filter, setFilter] = useState("all");
  const [sort, setSort] = useState("oldest");

  return (
    <div className="filterSortContainer">
      {/* Label and select for filtering tasks */}
      <label htmlFor="filterSelect">Filter:</label>
      <select
        id="filterSelect"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      >
        <option value="all">All</option>
        <option value="pending">Pending</option>
        <option value="completed">Completed</option>
      </select>

      {/* Label and select for sorting tasks */}
      <label htmlFor="sortSelect">Sort by:</label>
      <select
        id="sortSelect"
        value={sort}
        onChange={(e) => setSort(e.target.value)}
      >
        <option value="newest">Newest first</option>
        <option value="oldest">Oldest first</option>
      </select>
    </div>
  );
}
