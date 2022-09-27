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
      const removeState = state.filter((item) => item.id !== id);
      setState(removeState);
    },
    [state]
  );
  return (
    <>
      <TodoTitle />
      <TodoForm onAddhendler={onAddhendler} />
      {state.map((v) => (
        <TodoList key={v.id} onRemoveHandler={onRemoveHandler} state={v} />
      ))}
    </>
  );
};

export default Todo;
