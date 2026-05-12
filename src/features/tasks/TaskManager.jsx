import { useCallback, useMemo, useState } from "react";

import useTodos from "../../hooks/useTodos";

import { createTodo } from "../../utils/todoHelpers";
import { filterTodos } from "../../utils/filterTodos";

import TaskForm from "./components/taskForm/TaskForm";
import FilterButtons from "./components/filterButton/FilterButtons";
import TaskList from "./components/taskList/TaskList";
import TodoCounter from "./components/todoCounter/TodoCounter";

export default function TaskManager() {
  // ================= Input State =================
  const [task, setTask] = useState("");

  // ================= Filter State =================
  const [filter, setFilter] = useState("all");

  // ================= Custom Todo Hook =================
  const { todos, addTodo, deleteTodo, toggleTodo } = useTodos();

  // ================= Add Todo =================
  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      if (!task.trim()) return;

      const newTodo = createTodo(task);

      addTodo(newTodo);

      setTask("");
    },
    [task, addTodo],
  );

  // ================= Delete Todo =================
  const handleDelete = useCallback(
    (id) => {
      deleteTodo(id);
    },
    [deleteTodo],
  );

  // ================= Toggle Todo =================
  const handleToggle = useCallback(
    (id) => {
      toggleTodo(id);
    },
    [toggleTodo],
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
