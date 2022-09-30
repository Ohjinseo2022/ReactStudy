import styled from "styled-components";
const TodoTitle = ({ TodoScore }) => {
  return (
    <MaintitleDIV className="navBar">
      할일 목록 리스트 <span> {TodoScore} </span> 개
    </MaintitleDIV>
  );
};

export default TodoTitle;

const MaintitleDIV = styled.div`
  text-align: center;
  margin: 0 auto;
  width: 550px;
  font-size: 2rem;
  font-weight: bold;
  padding: 1rem;
  color: #fff;
  background-color: darkgray;
`;
