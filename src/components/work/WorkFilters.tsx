import "./WorkFilters.css";
import { filterCategories } from "../../data/projects";

interface WorkFiltersProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

export default function WorkFilters({ activeFilter, onFilterChange }: WorkFiltersProps) {
  return (
    <ul className="work-filters" role="list" aria-label="Filter case studies by category">
      {filterCategories.map((cat) => (
        <li key={cat}>
          <button
            className="work-filter-btn"
            aria-pressed={activeFilter === cat}
            onClick={() => onFilterChange(cat)}
          >
            {cat}
          </button>
        </li>
      ))}
    </ul>
  );
}
