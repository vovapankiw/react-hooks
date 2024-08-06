"use client";

import AddTodo from "@/components/AddTodo";
import TodoList from "@/components/TodoList";
import { useTodoContext } from "@/hooks/useTodo";

export default function Home() {
  const { createTodo } = useTodoContext();

  return (
    <div className="m-6 flex flex-col gap-3">
      <AddTodo createTodo={createTodo} />
      <TodoList />
    </div>
  );
}
