import "./todoTitle.css";

const TodoTitle = ({ TodoScore }) => {
  return (
    <div className="navBar">
      할일 목록 리스트 <span> {TodoScore} </span> 개
    </div>
  );
};

export default TodoTitle;
