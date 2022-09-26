import { useCallback, useEffect, useState } from "react";

const Effect = () => {
  const [color, setColor] = useState("red");
  const onChangeColor = useCallback(() => {
    if (color === "red") {
      setColor("blue");
    } else {
      setColor("red");
    }
  }, [color]);

  useEffect(() => {
    console.log("페이지가 열렷습니다.");
  }, []);

  useEffect(() => {
    console.log("색이 변경되었습니다.");
  }, [color]);
  return (
    <>
      <div>Effect</div>
      <input type="text" readOnly value={color} style={{ color }} />
      <button onClick={onChangeColor}>변경</button>
    </>
  );
};

export default Effect;
