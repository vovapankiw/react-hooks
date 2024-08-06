import { Todo } from "@/types/todo.type";
import { ActionType, ADD_TODO, COMPLETE_TODO, REMOVE_TODO } from "./types";

type CreateTodo = { type: typeof ADD_TODO; payload: { todo: string } };
type CompleteTodo = { type: typeof COMPLETE_TODO; payload: { id: string } };
type RemoveTodo = { type: typeof REMOVE_TODO; payload: { id: string } };

export type Action = CreateTodo | CompleteTodo | RemoveTodo;

export const createTodo = (todo: Todo) => {
  return {
    type: ADD_TODO,
    payload: { todo },
  };
};

export const completeTodo = (id: string) => {
  return {
    type: COMPLETE_TODO,
    payload: { id },
  };
};

export const removeTodo = (id: string) => {
  return {
    type: REMOVE_TODO,
    payload: { id },
  };
};
