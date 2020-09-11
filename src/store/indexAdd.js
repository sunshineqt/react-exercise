import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { countReducer } from "./counterReducer";
// 定义修改规则
// function countReducer(state = 0, action) {
//   switch (action.type) {
//     case "ADD":
//       return state + 1;
//     case "MINUS":
//       return state - 1;
//     default:
//       return state;
//   }
// }

const store = createStore(countReducer, applyMiddleware(thunk, logger));
export default store;
