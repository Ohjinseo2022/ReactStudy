/**
 * 컴포넌트 랜더 함수의 기본형태
 * 컴포넌트 명은 대문자 시작 (이유는 훅 함수가 사용되기 위해서)
 * const 컴포넌트명 = () =>{
 *    js, jsx 문법(hook)
 *
 *    return(
 *      "html"
 *    )
 * }
 * export default 밖에서 사용할 이름(컴포넌트명)
 */

import TodoForm from "../components/todoForm";
import TodoList from "../components/todoList";
import TodoTitle from "../components/todoTitle";

const Todo = () => {
  //랜더함수 시작 => re-randering
  return (
    <>
      <TodoTitle />
      <TodoForm />
      <TodoList />
    </>
  );
};

export default Todo;
