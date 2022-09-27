const TodoList = ({ state, onRemoveHandler, stateIndex }) => {
  return (
    <div>
      {stateIndex + 1}. {state.Todo}
      <button onClick={onRemoveHandler} value={state.id}>
        완료
      </button>
    </div>
  );
};

export default TodoList;
