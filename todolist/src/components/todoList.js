import styled from "styled-components";

const TodoList = ({ state, onRemoveHandler, stateIndex }) => {
  return (
    <TodoListContainer>
      <TodoListSpan>
        {stateIndex + 1}. {state.Todo}
      </TodoListSpan>
      <TodoListBtn onClick={onRemoveHandler} value={state.id}>
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
  width: 60px;
  height: 2.5rem;
  font-size: 1.5rem;
  line-height: 40px;
`;

const TodoListSpan = styled.span`
  color: red;
`;
