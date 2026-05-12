import { useEffect, useState } from "react";
import TaskForm from "./taskForm/TaskForm";
import TaskList from "./taskList/TaskList";
import TodoCounter from "./todoCounter/todoCounter";
import FilterButtons from "./filterButton/FilterButtons";

export default function TaskManager() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");

    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  const [filter, setFilter] = useState("all");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!task.trim()) return;

    const newTodo = {
      id: Date.now(),
      text: task,
      completed: false,
    };

    setTodos((prev) => [...prev, newTodo]);

    setTask("");
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleDelete = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const handleToggle = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  return (
    <>
      <TaskForm
        inputValue={task}
        onInputChange={(e) => setTask(e.target.value)}
        onSubmit={handleSubmit}
        placeholder="Enter new task..."
        buttonText="Add"
        type="submit"
      />

      <TodoCounter todos={todos} />

      <FilterButtons currentFilter={filter} onFilterChange={setFilter} />

      <TaskList todos={todos} onDelete={handleDelete} onToggle={handleToggle} />
    </>
  );
}
