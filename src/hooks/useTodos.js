import { useCallback, useEffect, useReducer } from "react";
import { taskReducer } from "../reducers/taskReducer";

export default function useTodos() {
  const [todos, dispatch] = useReducer(taskReducer, [], () => {
    const savedTodos = localStorage.getItem("todos");

    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = useCallback((todo) => {
    dispatch({
      type: "ADD_TASK",
      payload: todo,
    });
  }, []);

  const deleteTodo = useCallback((id) => {
    dispatch({
      type: "DELETE_TASK",
      payload: id,
    });
  }, []);

  const toggleTodo = useCallback((id) => {
    dispatch({
      type: "TOGGLE_TASK",
      payload: id,
    });
  }, []);

  return {
    todos,
    addTodo,
    deleteTodo,
    toggleTodo,
  };
}
