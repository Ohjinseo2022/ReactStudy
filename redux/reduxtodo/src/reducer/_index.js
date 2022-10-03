import { combineReducers } from "redux";
import todo from "./todo";
const rootReducer = combineReducers({
  /*합칠 리뉴서 목록*/
  todo,
});

export default rootReducer;
