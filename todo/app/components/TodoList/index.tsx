import { Todo } from "@/app/types/todo.type";
import TodoItem from "../TodoItem";

type Props = {
  todos: Todo[];
  onCompleteTodo: (id: string, checked: boolean) => void;
  onRemoveTodo: (id: string) => void;
};

export default function TodoList({
  todos,
  onCompleteTodo,
  onRemoveTodo,
}: Props) {
  return (
    <ul>
      {todos.map((todo) => {
        return (
          <li key={todo.id} className="flex items-center gap-4 text-lg">
            <TodoItem
              todo={todo}
              onCompleteTodo={onCompleteTodo}
              onRemoveTodo={onRemoveTodo}
            />
          </li>
        );
      })}
    </ul>
  );
}
