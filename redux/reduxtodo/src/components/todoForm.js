import { useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { INSERT_TODO } from "../reducer/todo";

const TodoForm = () => {
  const dispatch = useDispatch();

  const state = useSelector((state) => state.todo);

  const [text, setText] = useState("");
  /*
  rootReducer 설정 (reducer 등을 combine)
  => 리덕스 설정에서 store 에 매개변수로 전달 (저장소에 저장)
  =>Provider에 state를 전달
  => useSelector( (state)<-- 결과값으로 reducer에서 만든 모든 state들이 전달되고 
  그 중에서 하위선택자를 이용 내가 원하는 reducer의 state를 가지고 올 수 있다.)
  */

  const onChangeInput = useCallback(
    (e) => {
      setText(e.target.value);
    },
    [setText]
  );

  const addState = useCallback(() => {
    dispatch({
      type: INSERT_TODO,
      data: {
        id: state[state.length - 1].id + 1,
        todo: text,
      },
    });
    setText("");
  }, [dispatch, state, text]);

  const onEnterHandler = useCallback(
    (e) => {
      if (e.key === "Enter") {
        addState();
        setText("");
      }
    },
    [setText, addState]
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
      <TodoButton onClick={addState} value={text}>
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
