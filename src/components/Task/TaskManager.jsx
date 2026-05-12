import { useState } from "react";
import TaskForm from "./taskForm/TaskForm";

export default function TaskManager() {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(task);

    setTask("");
  };

  return (
    <TaskForm
      inputValue={task}
      onInputChange={(e) => setTask(e.target.value)}
      onSubmit={handleSubmit}
      placeholder="Enter new task..."
      buttonText="Add"
      type="submit"
    />
  );
}
