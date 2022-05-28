import styled, { css } from "styled-components";
import { MdDone, MdDelete } from "react-icons/md";

const RemoveStyle = styled.div`
  display: none;
  font-size: 20px;
  color: #ff6b66b;
  cursor: pointer;
  &:hover {
    color: #ff6b85;
  }
`;

const TodoItemStyle = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  &:hover {
    ${RemoveStyle} {
      display: initial;
    }
  }
`;

const CheckSquare = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 23px;
  height: 23px;
  border: 1px solid;
  border-radius: 5px;
  ${(props) =>
    props.done &&
    css`
      background-color: #6a86ff;
      color: white;
    `}
`;

const Text = styled.div`
  flex: 1;
  padding: 5px 25px;
  font-size: 16px;
  ${(props) =>
    props.done &&
    css`
      color: #d1d9ff;
      text-decoration: line-through;
    `}
`;

const TodoItem = ({ id, done, text, first }) => {
  return (
    <div>
      <TodoItemStyle>
        <CheckSquare done={done}>{done && <MdDone />}</CheckSquare>
        <Text done={done}>{text}</Text>
        <RemoveStyle>
          <MdDelete />
        </RemoveStyle>
      </TodoItemStyle>
    </div>
  );
};

export default TodoItem;
