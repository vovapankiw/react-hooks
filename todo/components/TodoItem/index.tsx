import { Todo } from "@/types/todo.type";

type Props = {
  todo: Todo;
  onCompleteTodo: (id: string) => void;
  onRemoveTodo: (id: string) => void;
};

export default function TodoItem({
  todo,
  onCompleteTodo,
  onRemoveTodo,
}: Props) {
  const { id, text, completed } = todo;

  return (
    <>
      <input
        type="checkbox"
        checked={completed}
        onChange={(e) => onCompleteTodo(id)}
      />
      {!completed && <span>{text}</span>}
      {completed && <s>{text}</s>}
      <button
        className="rounded-full size-5 text-sm text-white  bg-amber-950 opacity-75 hover:opacity-100"
        onClick={() => onRemoveTodo(id)}
      >
        X
      </button>
    </>
  );
}
