import { useDispatch } from "react-redux";
import { useCallback } from "react";
import styled from "styled-components";
import { DELETE_TODO } from "../reducer/todo";

const TodoList = ({ state, index }) => {
  const dispatch = useDispatch();
  const onRemoveHandler = useCallback(() => {
    dispatch({
      type: DELETE_TODO,
      id: state.id,
    });
  }, [dispatch, state.id]);

  return (
    <TodoListContainer>
      <TodoListSpan>
        {index + 1}. {state.todo}
      </TodoListSpan>
      <TodoListBtn value={state.id} onClick={onRemoveHandler}>
        완료
      </TodoListBtn>
    </TodoListContainer>
  );
};

export default TodoList;

const TodoListContainer = styled.div`
  width: 550px;

  margin: 0 auto;
  font-size: 2rem;
  background-color: #e6e6e6;
`;

const TodoListBtn = styled.button`
  width: 100px;
  height: 2.5rem;
  font-size: 1.5rem;
  line-height: 40px;
`;

const TodoListSpan = styled.span`
  color: black;
`;
