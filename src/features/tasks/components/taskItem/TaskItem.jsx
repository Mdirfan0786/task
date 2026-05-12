import Button from "../../../../components/ui/Button/Button";
import styles from "./taskItem.module.css";

export default function TaskItem({ todo, onDelete, onToggle }) {
  return (
    <li
      className={`${styles.taskItem} ${todo.completed ? styles.completed : ""}`}
      onClick={() => onToggle(todo.id)}
    >
      <span className={styles.text}>{todo.text}</span>

      <Button
        className={styles.deleteBtn}
        onClick={(e) => {
          e.stopPropagation();
          onDelete(todo.id);
        }}
      >
        Delete
      </Button>
    </li>
  );
}
