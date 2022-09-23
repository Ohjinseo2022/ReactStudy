import { useRef, useState } from "react";

const AddState = ({ onClickEvent, stateId }) => {
  const [name, setName] = useState("");
  const nameInput = useRef(null);

  const onAddStateHandler = () => {
    onClickEvent(stateId + 1, name);
    setName("");
    console.log(stateId);
  };
  const onChangeInput = (e) => {
    setName(e.target.value);
    // userState의 변수를 바꿔주는 함수는 비동기 함수입니다.
    //console.log(name);
    // 따라서 여기서 콘솔을 찍을 떄는 지금 현재 바뀐 값이 지정이 되지 않습니다.
  };
  const onReSetHandler = () => {
    setName("");
    console.log(nameInput);
    nameInput.current.focus();
    // nameInput.current.style.display = "none";
    //nameInput.current = domselector.(input)
  };

  const onEnterAddState = (e) => {
    console.log(e);
    if (e.key === "Enter") {
      onClickEvent(stateId + 1, name);
      setName("");
      alert("값이 추가됐습니다.");
    }
  };
  return (
    <>
      <input
        type="text"
        value={name}
        //이벤트 객체를 받기 위해서는
        //이벤트 함수속성 = {실행함수명}으로 실행해야 한다.
        //단, 이벤트 객체 함수를 받지 않고 두가지 이상의 함수를 실행하고자 할떄는
        //이벤트 함수속성 = {()=>{함수1()  함수2() }} 이러한 방식으로 실행하면 된다.!
        placeholder="이름을 입력하세요"
        onChange={onChangeInput}
        ref={nameInput}
        onKeyPress={onEnterAddState}
      />
      <button onClick={onAddStateHandler}>추가</button>
      <button onClick={onReSetHandler}>초기화</button>
    </>
  );
};

export default AddState;
