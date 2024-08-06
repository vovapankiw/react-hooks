import TodoItem from "../TodoItem";
import { useTodoContext } from "@/hooks/useTodo";

export default function TodoList() {
  const { todos, completeTodo, removeTodo } = useTodoContext();

  return (
    <ul>
      {todos.map((todo) => {
        return (
          <li key={todo.id} className="flex items-center gap-4 text-lg">
            <TodoItem
              todo={todo}
              onCompleteTodo={completeTodo}
              onRemoveTodo={removeTodo}
            />
          </li>
        );
      })}
    </ul>
  );
}
