const initialState = [
  {
    id: 1,
    todo: "리엑트 리덕스 설정",
  },
  {
    id: 2,
    todo: "리엑트 복습하기",
  },
];

export const INSERT_TODO = "INSERT_TODO";
export const DELETE_TODO = "DELETE_TODO";
/*삭제 실습 */
const todo = (state = initialState, action) => {
  switch (action.type) {
    case INSERT_TODO:
      return [...state, { id: action.data.id, todo: action.data.todo }];
    case DELETE_TODO:
      return state.filter((item) => item.id !== action.id);
    default:
      return state;
  }
};

export default todo;
