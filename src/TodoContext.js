import React, { createContext, useReducer, useRef } from "react";

export const TodoStateContext = createContext();
export const TodoDispatchContext = createContext();
export const TodoNextIdContext = createContext();

const exTodos = [
  {
    id: 1,
    content: "리액트 공부하기",
    done: false,
  },
  {
    id: 2,
    content: "Context 생성하기",
    done: true,
  },
  {
    id: 3,
    content: "Todo-app 완성하기",
    done: true,
  },
];

const todoReducer = (state, action) => {
  switch (action.type) {
    case "CREATE":
      return state.concat(action.todo);
    case "TOGGLE":
      return state.map((it) =>
        it.id === action.id ? { ...it, done: !it.done } : it
      );
    case "REMOVE":
      return state.filter((it) => it.id !== action.id);
    default:
      return state;
  }
};

const TodoContext = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, exTodos);
  const nextId = useRef(4);

  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        <TodoNextIdContext.Provider value={nextId}>
          {children}
        </TodoNextIdContext.Provider>
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
};

export default TodoContext;
