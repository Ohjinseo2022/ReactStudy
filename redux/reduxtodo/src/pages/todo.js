import TodoForm from "../components/todoForm";
import TodoList from "../components/todoList";
import TodoTitle from "../components/todoTitle";

import { useSelector } from "react-redux";

const Todo = () => {
  const state = useSelector((state) => state.todo);
  console.log(state.length);

  return (
    <>
      <TodoTitle TodoScore={state.length} />
      <TodoForm />
      {state.map((v, index) => (
        <TodoList key={v.id} state={v} index={index} />
      ))}
    </>
  );
};

export default Todo;
