import { useState } from "react";

const AddState = ({ onIncrement }) => {
  const [name, setName] = useState("");

  const onChangeInput = (e) => {
    setName(e.target.value);
  };
  const onAddhendler = (e) => {
    onIncrement(name);
    setName("");
  };

  return (
    <>
      <input
        type="text"
        value={name}
        placeholder="이름을 입력하세요"
        onChange={onChangeInput}
      />
      <button onClick={onAddhendler}>추가</button>
      <button>초기화</button>
    </>
  );
};

export default AddState;
