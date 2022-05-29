import styled from "styled-components";

const TodoLayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  height: 750px;
  background: white;
  box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.2);
  position: relative;
  border-radius: 7px;
`;

const TodoLayout = ({ children }) => {
  return (
    <div>
      <TodoLayoutContainer>{children}</TodoLayoutContainer>
    </div>
  );
};

export default TodoLayout;
