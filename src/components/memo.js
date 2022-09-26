import { useMemo, useState } from "react";

const Memo = () => {
  const [color, setColor] = useState("red");
  const [text, setText] = useState("");

  const getColor = useMemo(() => console.log(`색은 ${color}입니다.`), [color]);
  const getText = useMemo(
    () => console.log(`텍스트는 실행하지 않습니다.`),
    [text]
  );

  const onChangeColor = () => {
    if (color === "red") {
      setColor("blue");
    } else {
      setColor("red");
    }
  };
  return (
    <>
      <div>Memo</div>
      <input type="text" readOnly value="" />
      <button onClick={onChangeColor}>변경</button>
    </>
  );
};
export default Memo;
