import React, { useContext } from "react";
import styled, { css } from "styled-components";
import { MdDone, MdDelete } from "react-icons/md";
import { TodoDispatchContext } from "../TodoContext";

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
  padding: 20px;
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
  font-family: "Noto Sans KR", sans-serif;
  ${(props) =>
    props.done &&
    css`
      color: #d1d9ff;
      text-decoration: line-through;
    `}
`;

const TodoItem = ({ id, done, content }) => {
  const dispatch = useContext(TodoDispatchContext);
  const onToggle = () => dispatch({ type: "TOGGLE", id });
  const onRemove = () => dispatch({ type: "REMOVE", id });

  return (
    <div>
      <TodoItemStyle>
        <CheckSquare done={done} onClick={onToggle}>
          {done && <MdDone />}
        </CheckSquare>
        <Text done={done}>{content}</Text>
        <RemoveStyle onClick={onRemove}>
          <MdDelete />
        </RemoveStyle>
      </TodoItemStyle>
    </div>
  );
};

export default React.memo(TodoItem);
