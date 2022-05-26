import styled from "styled-components";

const TodoLayoutContainer = styled.div`
  width: 500px;
  height: 600px;
  background: white;
  box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.2);
`;

const TodoLayout = ({ children }) => {
  return (
    <div>
      <TodoLayoutContainer>{children}</TodoLayoutContainer>
    </div>
  );
};

export default TodoLayout;
