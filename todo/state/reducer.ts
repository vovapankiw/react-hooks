import { Todo } from "@/types/todo.type";
import { Action } from "./actions";
import { ADD_TODO, COMPLETE_TODO, REMOVE_TODO } from "./types";

export type InitialStateType = {
  todos: Todo[];
};

export const initialState: InitialStateType = {
  todos: [],
} as const;

export const reducer = (state: InitialStateType, action: Action) => {
  switch (action.type) {
    case ADD_TODO:
      const newTodo = {
        id: Date.now().toString(),
        text: action.payload.todo,
        completed: false,
        createdAt: new Date().toISOString(),
      };

      return { ...state, todos: [...state.todos, newTodo] };
    case COMPLETE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload.id) {
            return {
              ...todo,
              completed: !todo.completed,
            };
          }

          return todo;
        }),
      };
    case REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter(({ id }) => id !== action.payload.id),
      };
  }
};
