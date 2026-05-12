import TaskItem from "../taskItem/TaskItem";

export default function TaskList({ todos, onDelete, onToggle }) {
  return (
    <ul>
      {todos.map((todo) => (
        <TaskItem
          key={todo.id}
          todo={todo}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </ul>
  );
}
