import { createContext, useCallback, useMemo, useReducer } from "react";
import { useContextWrapper } from "./useContext";
import { initialState, reducer } from "@/state/reducer";
import { Todo } from "@/types/todo.type";
import { ADD_TODO, COMPLETE_TODO, REMOVE_TODO } from "@/state/types";

type TodoContext = {
  todos: Todo[];
  createTodo: (text: string) => void;
  completeTodo: (id: string) => void;
  removeTodo: (id: string) => void;
};

export const TodoContext = createContext<TodoContext | null>(null);

export const useTodoContext = () => {
  return useContextWrapper(TodoContext, {
    contextName: useTodoContext.name,
    providerName: TodoContextProvider.name,
  });
};

export const TodoContextProvider = ({ children }: React.PropsWithChildren) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const todos = useMemo(() => state.todos, [state]);

  const createTodo = useCallback(
    (text: string) => dispatch({ type: ADD_TODO, payload: { todo: text } }),
    []
  );

  const completeTodo = useCallback((id: string) => {
    dispatch({ type: COMPLETE_TODO, payload: { id } });
  }, []);

  const removeTodo = useCallback((id: string) => {
    dispatch({ type: REMOVE_TODO, payload: { id } });
  }, []);

  return (
    <TodoContext.Provider
      value={{ todos, createTodo, completeTodo, removeTodo }}
    >
      {children}
    </TodoContext.Provider>
  );
};
