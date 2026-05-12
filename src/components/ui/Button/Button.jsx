import Styles from "./Button.module.css";

export default function Button({
  children,
  type = "button",
  onClick,
  className = "",
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${Styles.button} ${className}`}
    >
      {children}
    </button>
  );
}
