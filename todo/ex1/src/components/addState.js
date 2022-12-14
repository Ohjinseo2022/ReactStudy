import { useCallback, useContext, useState } from "react";
import { ADD_STATE, Context } from "../reducer/context";

const AddState = () => {
  const { state, dispatch } = useContext(Context);

  const [name, setName] = useState("");
  const onChangeInput = useCallback((e) => {
    setName(e.target.value);
  }, []);

  const onAddState = useCallback(() => {
    dispatch({
      type: ADD_STATE,
      id: state[state.length - 1].id + 1,
      name: name,
    });
    setName("");
  }, [state, name, dispatch]);

  // const onAddhendler = () => {
  //   onIncrement(name);
  //   setName("");
  // };
  //기존방식
  return (
    <>
      <input
        type="text"
        value={name}
        placeholder="이름을 입력하세요"
        onChange={onChangeInput}
      />
      <button onClick={onAddState}>추가</button>
      <button>초기화</button>
    </>
  );
};

export default AddState;
