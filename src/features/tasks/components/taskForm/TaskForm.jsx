import Button from "../../../../components/ui/Button/Button";
import Styles from "./TaskForm.module.css";

export default function TaskForm({
  inputValue,
  onInputChange,
  onSubmit,
  placeholder,
  buttonText,
  type,
}) {
  return (
    <form onSubmit={onSubmit} className={Styles.form}>
      <input
        type="text"
        value={inputValue}
        onChange={onInputChange}
        placeholder={placeholder}
        autoComplete="off"
        required
      />

      <Button type={type} className={Styles.Btn}>
        {buttonText}
      </Button>
    </form>
  );
}
