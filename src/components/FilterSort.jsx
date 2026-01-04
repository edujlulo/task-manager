import { useState } from "react";
import "./FilterSort.css";

export default function FilterSort({
  filterValue,
  setFilterValue,
  sortValue,
  setSortValue,
}) {
  return (
    <div className="filterSortContainer">
      {/* Label and select for filtering tasks */}
      <label htmlFor="filterSelect">Filter:</label>
      <select
        id="filterSelect"
        value={filterValue}
        onChange={(e) => setFilterValue(e.target.value)}
      >
        <option value="all">All</option>
        <option value="pending">Pending</option>
        <option value="completed">Completed</option>
      </select>
      {/* Label and select for sorting tasks */}
      <label htmlFor="sortSelect">Sort by:</label>
      <select
        id="sortSelect"
        value={sortValue}
        onChange={(e) => setSortValue(e.target.value)}
      >
        <option value="newest">Newest first</option>
        <option value="oldest">Oldest first</option>
      </select>
    </div>
  );
}
