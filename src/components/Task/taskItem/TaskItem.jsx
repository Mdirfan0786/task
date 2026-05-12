import Button from "../../ui/Button/Button";
import styles from "./taskItem.module.css";

export default function TaskItem({ todo, onDelete }) {
  return (
    <li className={styles.taskItem}>
      <span>{todo.text}</span>

      <Button onClick={() => onDelete(todo.id)} className={styles.deleteBtn}>
        Delete
      </Button>
    </li>
  );
}
