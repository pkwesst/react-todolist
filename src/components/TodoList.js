import styled from "styled-components";
import TodoItem from "./TodoItem";
import React, { useContext } from "react";
import { TodoStateContext } from "../TodoContext";

const TodoListStyle = styled.div`
  flex-grow: 1;
  overflow-y: auto;
  padding: 0 20px;
`;

const TodoList = () => {
  const todos = useContext(TodoStateContext);
  return (
    <TodoListStyle>
      {todos.map((it) => (
        <TodoItem key={it.id} id={it.id} content={it.content} done={it.done} />
      ))}
    </TodoListStyle>
  );
};

export default TodoList;
