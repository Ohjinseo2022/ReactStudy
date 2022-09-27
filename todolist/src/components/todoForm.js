import { useState, useRef } from "react";
import styled from "styled-components";

const TodoForm = ({ onAddhendler, stateId }) => {
  const [text, setText] = useState("");
  const mousePoint = useRef(null);

  const onChangeInput = (e) => {
    setText(e.target.value);
  };
  const onAddState = (e) => {
    onAddhendler(stateId + 1, text);
    setText("");
    mousePoint.current.focus();
  };

  const onEnterHandler = (e) => {
    if (e.key === "Enter") {
      onAddhendler(stateId + 1, text);
      setText("");
    }
  };
  return (
    <Container>
      <TodoaddInput
        type="text"
        value={text}
        onChange={onChangeInput}
        placeholder="할 일을 적어주세요"
        onKeyPress={onEnterHandler}
        ref={mousePoint}
      />
      <TodoButton onClick={onAddState} value={text}>
        추가
      </TodoButton>
    </Container>
  );
};

export default TodoForm;

const Container = styled.div`
  margin: 0 auto;
  width: 550px;
  display: flex;
`;
const TodoaddInput = styled.input`
  border-radius: 5px;
  width: 500px;
  font-size: 32px;
`;

const TodoButton = styled.button`
  border-radius: 5px;
  width: 50px;
  height: 43px;
`;
