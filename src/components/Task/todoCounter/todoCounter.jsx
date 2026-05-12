import Styles from "./todoCounter.module.css";

export default function todoCounter({ todos }) {
  return (
    <div>
      <p className={Styles.task_counter}>{todos.length} Task left</p>
    </div>
  );
}
