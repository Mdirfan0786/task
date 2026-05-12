import Navbar from "../../components/Navbar/Navbar";
import Styles from "./About.module.css";

export default function About() {
  return (
    <div className={Styles.body}>
      <header>
        <Navbar />
      </header>

      {/* Main */}
      <main>
        <section className={Styles.about}>
          <div className={Styles.container}>
            <h1>About Task Manager App</h1>

            <p className={Styles.description}>
              This Task Manager App is a modern React application built to
              manage daily tasks efficiently. Users can add, delete, filter, and
              mark tasks as completed with persistent local storage support.
            </p>

            {/* Features */}
            <div className={Styles.card}>
              <h2>Features</h2>

              <ul>
                <li>Add new tasks</li>
                <li>Delete tasks</li>
                <li>Mark tasks as completed</li>
                <li>Filter active/completed tasks</li>
                <li>Persistent local storage support</li>
                <li>Responsive and reusable UI</li>
              </ul>
            </div>

            {/* Technologies */}
            <div className={Styles.card}>
              <h2>Technologies Used</h2>

              <ul>
                <li>React + Vite</li>
                <li>React Hooks</li>
                <li>useCallback</li>
                <li>useMemo</li>
                <li>Custom Hooks</li>
                <li>Feature-based Architecture</li>
                <li>CSS Modules</li>
                <li>React Router DOM</li>
              </ul>
            </div>

            {/* How To Use */}
            <div className={Styles.card}>
              <h2>How To Use</h2>

              <ol>
                <li>Enter a task in the input field.</li>

                <li>Click the Add button to save the task.</li>

                <li>Click on a task to mark it as completed.</li>

                <li>
                  Use filter buttons to view all, active, or completed tasks.
                </li>

                <li>Click the Delete button to remove a task.</li>
              </ol>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
