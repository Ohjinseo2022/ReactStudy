import TodoForm from "../components/todoForm";
import TodoList from "../components/todoList";
import TodoTitle from "../components/todoTitle";
import { useCallback, useState } from "react";

const Todo = () => {
  const [state, setState] = useState([
    {
      id: 1,
      Todo: "리엑트공부하기",
    },
    {
      id: 2,
      Todo: "Todo 리스트 만들기",
    },
  ]);

  const onAddhendler = useCallback(
    (id, todo) => {
      setState([...state, { id: id, Todo: todo }]);
    },
    [state]
  );

  const onRemoveHandler = useCallback(
    (id) => {
      const removeState = state.filter(
        (item) => item.id !== parseInt(id.target.value)
      );
      setState(removeState);
    },
    [state]
  );
  return (
    <>
      <TodoTitle TodoScore={state.length} />
      <TodoForm
        onAddhendler={onAddhendler}
        stateId={state.length > 0 && state[state.length - 1].id}
      />
      {state.map((v, index) => (
        <TodoList
          key={v.id}
          onRemoveHandler={onRemoveHandler}
          state={v}
          stateIndex={index}
        />
      ))}
    </>
  );
};

export default Todo;
