import { useState, useCallback } from "react";
import styled from "styled-components";

const TodoForm = ({ onAddhendler, stateId }) => {
  const [text, setText] = useState("");
  const onChangeInput = useCallback(
    (e) => {
      setText(e.target.value);
    },
    [setText]
  );
  const onAddState = useCallback(
    (e) => {
      onAddhendler(stateId + 1, text);
      setText("");
    },
    [text, setText, stateId, onAddhendler]
  );

  const onEnterHandler = useCallback(
    (e) => {
      if (e.key === "Enter") {
        onAddhendler(stateId + 1, text);
        setText("");
      }
    },
    [text, setText, stateId, onAddhendler]
  );
  return (
    <Container>
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
