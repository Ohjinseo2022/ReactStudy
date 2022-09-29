import { useCallback, useReducer } from "react";
import { reducer } from "../reducer";
const Reducer = () => {
  const initialState = 0; //일반변수는 버츄얼돔이 인식을 하지못함 !  //상태값으로 변환을 시킬예정 상태값이 변하는 로직 자체를 외부로 뺴내는것이 리듀서

  /*배열 값을 반환 */
  const [number, dispatch] = useReducer(reducer, initialState); //버츄얼돔이 인식 할 수 있는 전역상태 state로바뀜
  //    상태명 , 전달 매개체(함수전달가능)      전달받을 로직, 변화를 줄 변수
  //dispatch 는 리듀에서도 사용함 !
  //2번이상 반복 사용되는 로직만 전역상태로 전환하는게 좋음!!

  const onIncrement = useCallback(() => {
    dispatch({
      type: "INCREMENT",
    });
  }, []);

  const onDecrement = useCallback(() => {
    dispatch({
      type: "DECREMENT",
    });
  }, []);
  return (
    <>
      <p>{number}</p>
      <button onClick={onIncrement}>+</button>
      <button onClick={onDecrement}>-</button>
    </>
  );
};

export default Reducer;
/**
 * useReducer(내가 만든 reducer로직, 밖에 로직을 관리할 변수)
 * => reducer(state,action) ---state에 이 변수 값을 전달해주고
 * 변수를 스테이트로 변환
 *
 * 리턴값으로
 * [반환 받을 스테이트명, dispatch]
 * dispatch = 전달 매개체 action값 (reducer에 데이터) 전달
 */
