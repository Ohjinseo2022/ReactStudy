import { useCallback, useContext, useEffect } from "react";
import { Context, REMOVE_STATE } from "../reducer/context";
import AddState from "./addState";

// 함수를 전역으로 만들어보자

const ContextAPI = () => {
  const { state, dispatch } = useContext(Context);

  useEffect(() => {
    console.log(state.length);
  }, [state]);

  // const onIncrement = useCallback(
  //   (name) => {
  //     dispatch({
  //       type: ADD_STATE,
  //       id: (state.length > 0 && state[state.length - 1].id) + 1,
  //       name: name,
  //     });
  //   },
  //   [state, dispatch]
  // );
  const onRemoveClick = useCallback(
    (id) => {
      dispatch({
        type: REMOVE_STATE,
        id: id,
      });
    },
    [dispatch]
  );
  // const onDecrement = useCallback(
  //   (e) => {
  //     console.log(e.target.value);
  //     dispatch({
  //       type: "REMOVE_STATE",
  //       id: e.target.value,
  //     });
  //     dispatch(dispatch);
  //   },
  //   [dispatch]
  // );
  //만들다 실패...
  return (
    <>
      <AddState />
      {state.map((v, index) => (
        <div key={v.id}>
          {index + 1}.{v.name}
          <button onClick={() => onRemoveClick(v.id)} value={v.id}>
            삭제
          </button>
        </div>
      ))}
    </>
  );
};

export default ContextAPI;
