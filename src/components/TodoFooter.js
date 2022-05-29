import styled, { css } from "styled-components";
import { MdAdd } from "react-icons/md";
import React, { useContext, useState } from "react";
import {
  TodoDispatchContext,
  TodoNextIdContext,
  TodoStateContext,
} from "../TodoContext";

const TodoFooterStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
  padding: 30px;
  height: 110px;
  border-top: 1px solid;
  position: relative;
  z-index: 0;

  .tasks {
    font-size: 15px;
    letter-spacing: 0.2em;
    transform: translate(25%, 50%);
  }
`;

const AddButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  background-color: #6a86ff;
  font-size: 35px;
  color: white;
  letter-spacing: 0.25em;
  border: none;
  border-radius: 50%;
  outline: none;
  cursor: pointer;

  position: absolute;
  left: 80%;
  top: -30%;
  z-index: 2;

  &:hover {
    background-color: #b7c4ff;
  }

  trainsition: 0.2s all ease-in;
  ${(it) =>
    it.button &&
    css`
      background: #ff6b85;
      &:hover {
        background: #ffcdd6;
      }
      &:active {
        background: #black;
      }
      transform: rotate(45deg);
    `}
`;
const InputStyle = styled.div`
  width: 100%;
  bottom: 0;
  left: 0;
  position: absolute;
  z-index: 1;
`;

const InputForm = styled.form`
  background: #f8f9fa;
  padding-left: 32px;
  padding-top: 41px;
  padding-right: 32px;
  padding-bottom: 28px;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top: 1px solid #e9ecef;
`;

const Input = styled.input`
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  width: 100%;
  outline: none;
  font-size: 16px;
  box-sizing: border-box;
`;

const TodoFooter = () => {
  const [button, setButton] = useState(false);
  const [content, setContent] = useState("");

  const todos = useContext(TodoStateContext);
  const undoneTasks = todos.filter((it) => !it.done);

  const dispatch = useContext(TodoDispatchContext);
  const nextId = useContext(TodoNextIdContext);

  const onToggle = () => setButton(!button);
  const onCreate = (it) => setContent(it.target.value);
  const onSubmit = (it) => {
    it.preventDefault();
    dispatch({
      type: "CREATE",
      todo: {
        id: nextId.current,
        content: content,
        done: false,
      },
    });
    setContent("");
    setButton(false);
    nextId.current += 1;
  };

  console.log(content);

  return (
    <TodoFooterStyle>
      <div className="TodoFooter">
        {button && (
          <InputStyle>
            <InputForm onSubmit={onSubmit}>
              <Input
                placeholder="Enter your todo!"
                autoFocus
                onChange={onCreate}
                content={content}
              />
            </InputForm>
          </InputStyle>
        )}
        <AddButton onClick={onToggle} button={button}>
          <MdAdd />
        </AddButton>
        <div className="tasks">{undoneTasks.length} TASKS</div>
      </div>
    </TodoFooterStyle>
  );
};

export default React.memo(TodoFooter);
