import Styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={Styles.footer}>
      <p>
        © {new Date().getFullYear()} Task Manager App. Built with React + Vite.
      </p>
    </footer>
  );
}
