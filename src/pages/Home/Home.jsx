import TaskManager from "../../features/tasks/TaskManager";
import Styles from "./Home.module.css";

export default function Home() {
  return (
    <>
      <div className={Styles.body}>
        <main>
          <div className={Styles.container}>
            <h2>Todo List</h2>

            <TaskManager />
          </div>
        </main>
      </div>
    </>
  );
}
