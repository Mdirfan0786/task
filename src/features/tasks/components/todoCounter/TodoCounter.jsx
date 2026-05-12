import styles from "./todoCounter.module.css";

export default function TodoCounter({ todos }) {
  const remainingTasks = todos.filter((todo) => !todo.completed).length;

  return (
    <div>
      <p className={styles.task_counter}>{remainingTasks} Tasks Left</p>
    </div>
  );
}
