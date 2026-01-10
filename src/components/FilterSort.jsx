import "./FilterSort.css";

export default function FilterSort({
  filterValue,
  setFilterValue,
  sortValue,
  setSortValue,
}) {
  return (
    <div className="filter-sort-container">
      <div className="filter-row">
        <label htmlFor="filter-select">Filter:</label>
        <select
          id="filter-select"
          value={filterValue}
          onChange={(e) => setFilterValue(e.target.value)}
        >
          <option value="all">All</option>
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
        </select>
      </div>

      <div className="filter-row">
        <label htmlFor="sort-select">Sort by:</label>
        <select
          id="sort-select"
          value={sortValue}
          onChange={(e) => setSortValue(e.target.value)}
        >
          <option value="newest">Newest first</option>
          <option value="oldest">Oldest first</option>
        </select>
      </div>
    </div>
  );
}
