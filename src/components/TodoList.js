import styled from "styled-components";
import TodoItem from "./TodoItem";
import React from "react";

const TodoListStyle = styled.div`
  flex-grow: 1;
  overflow-y: auto;
  padding: 23px;

  &: first-child {
    padding-top: 100px;
  }
`;

const TodoList = () => {
  return (
    <TodoListStyle>
      <TodoItem text="프로젝트 생성하기" done={true} />
      <TodoItem text="운동하기" done={true} />
      <TodoItem text="컴포넌트 스타일링하기" done={false} />
      <TodoItem text="라면먹기" done={true} />
      <TodoItem text="서평 작성하기" done={false} />
      <TodoItem text="서평 작성하기" done={false} />
      <TodoItem text="서평 작성하기" done={false} />
      <TodoItem text="서평 작성하기" done={false} />
      <TodoItem text="서평 작성하기" done={false} />
      <TodoItem text="서평 작성하기" done={false} />
    </TodoListStyle>
  );
};

export default TodoList;
