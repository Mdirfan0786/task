import { useCallback, useMemo, useState } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";
import { createTodo } from "../../utils/todoHelpers";
import TaskForm from "./components/taskForm/TaskForm";
import FilterButtons from "./components/filterButton/FilterButtons";
import TaskList from "./components/taskList/TaskList";
import TodoCounter from "./components/todoCounter/todoCounter";
import { filterTodos } from "../../utils/filterTodos";

export default function TaskManager() {
  const [task, setTask] = useState("");

  const [todos, setTodos] = useLocalStorage("todos", []);

  const [filter, setFilter] = useState("all");

  // ================= Add Todo =================
  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      if (!task.trim()) return;

      const newTodo = createTodo(task);

      setTodos((prevTodos) => [...prevTodos, newTodo]);

      setTask("");
    },
    [task, setTodos],
  );

  // ================= Delete Todo =================
  const handleDelete = useCallback(
    (id) => {
      setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    },
    [setTodos],
  );

  // ================= Toggle Todo =================
  const handleToggle = useCallback(
    (id) => {
      setTodos((prevTodos) =>
        prevTodos.map((todo) =>
          todo.id === id
            ? {
                ...todo,
                completed: !todo.completed,
              }
            : todo,
        ),
      );
    },
    [setTodos],
  );

  // ================= Filter Todos =================
  const filteredTodos = useMemo(() => {
    return filterTodos(todos, filter);
  }, [todos, filter]);

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

      <TaskList
        todos={filteredTodos}
        onDelete={handleDelete}
        onToggle={handleToggle}
      />
    </>
  );
}
