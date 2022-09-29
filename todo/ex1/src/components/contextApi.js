import { useCallback, useContext, useEffect } from "react";
import { Context } from "../reducer/context";
import AddState from "./addState";

// 함수를 전역으로 만들어보자

const ContextAPI = () => {
  const { state, dispatch } = useContext(Context);

  useEffect(() => {
    console.log(state.length);
  }, [state]);

  const onIncrement = useCallback(
    (name) => {
      dispatch({
        type: "ADD_STATE",
        id: (state.length > 0 && state[state.length - 1].id) + 1,
        name: name,
      });
    },
    [state]
  );
  const onDecrement = useCallback(
    (e) => {
      dispatch({
        type: "REMOVE_STATE",
        id: e.target.value,
      });
      console.log(dispatch());
    },
    [state]
  );
  return (
    <>
      <AddState onIncrement={onIncrement} />
      {state.map((v, index) => (
        <div>
          <span>
            {index + 1}.{v.name}
          </span>
          <button onClick={onDecrement} value={v.id}>
            삭제
          </button>
        </div>
      ))}
    </>
  );
};

export default ContextAPI;
