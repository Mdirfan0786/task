import Button from "../../../../components/ui/Button/Button";
import Styles from "./FilterButton.module.css";

export default function FilterButtons({ currentFilter, onFilterChange }) {
  const filters = ["all", "active", "completed"];

  return (
    <div className={Styles.filters}>
      {filters.map((filter) => (
        <Button
          key={filter}
          onClick={() => onFilterChange(filter)}
          className={currentFilter === filter ? "active-filter" : ""}
        >
          {filter}
        </Button>
      ))}
    </div>
  );
}
