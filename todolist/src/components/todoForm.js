import { useState } from "react";
import styled from "styled-components";

const TodoForm = ({ onAddhendler, stateId }) => {
  const [text, setText] = useState("");
  const onChangeInput = (e) => {
    setText(e.target.value);
  };
  const onAddState = (e) => {
    onAddhendler(stateId + 1, text);
    setText("");
  };

  const onEnterHandler = (e) => {
    if (e.key === "Enter") {
      onAddhendler(stateId + 1, text);
      setText("");
    }
  };
  return (
    <div>
      <TodoaddInput
        type="text"
        value={text}
        onChange={onChangeInput}
        placeholder="할 일을 적어주세요"
        onKeyPress={onEnterHandler}
      />
      <TodoButton onClick={onAddState} value={text}>
        추가
      </TodoButton>
    </div>
  );
};

export default TodoForm;

const TodoaddInput = styled.input`
  border-radius: 5px;
  width: 500px;
  font-size: 32px;
  position: relative;
  padding-left: 20px;
`;

const TodoButton = styled.button`
  border-radius: 5px;
  width: 53px;
  height: 43px;
  position: absolute;
`;
