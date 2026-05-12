import Styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <header>
      <nav className={Styles.navbar}>
        <h1>Task Manager App</h1>
      </nav>
    </header>
  );
}
