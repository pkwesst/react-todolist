import styled from "styled-components";

const TodoListStyle = styled.div`
  flex-grow: 1;
  overflow-y: auto;
  padding: 20px 32px;
  padding-bottom: 48px;
`;

const TodoList = () => {
  return <TodoListStyle>잠 일찍 자고 일찍 일어나기</TodoListStyle>;
};

export default TodoList;
