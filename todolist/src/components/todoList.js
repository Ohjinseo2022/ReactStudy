const TodoList = ({ state }) => {
  return (
    <div>
      {state.id}. {state.Todo} <button>완료</button>
    </div>
  );
};

export default TodoList;
