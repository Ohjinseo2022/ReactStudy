const Hello = ({ name, color, isLover }) => {
  console.log(name);
  return (
    <div style={color && { color: color }}>
      안녕하세요 {name && name} 님 !
      {isLover ? <span>❤️</span> : <span>😂</span>}
      <span style={{ color: "red", fontSize: "50px" }}>반갑습니다</span>
    </div>
  );
};

export default Hello;
