"use client";

import { useRef, useState, useId } from "react";
import AddTodo from "./components/AddTodo";
import { Todo } from "./types/todo.type";
import TodoList from "./components/TodoList";

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const onAddTodo = (todo: Todo) => {
    setTodos((prev) => {
      return [...prev, todo];
    });
  };

  const onCompleteTodo = (completedTodoId: string, completed: boolean) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === completedTodoId) {
        return {
          ...todo,
          completed,
        };
      }

      return todo;
    });

    setTodos(updatedTodos);
  };

  const onRemoveTodo = (removedTodoId: string) => {
    const updatedTodos = todos.filter(({ id }) => id !== removedTodoId);

    setTodos(updatedTodos);
  };

  return (
    <div className="m-6 flex flex-col gap-3">
      <AddTodo onAddTodo={onAddTodo} />
      <TodoList
        todos={todos}
        onCompleteTodo={onCompleteTodo}
        onRemoveTodo={onRemoveTodo}
      />
    </div>
  );
}
