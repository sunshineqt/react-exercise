import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

import createSagaMiddleware from "redux-saga";
import mySaga from "./mySaga";

const initalUserInfo = {
  isLogin: false,
  user: { name: null },
};

// 定义修改规则
function countReducer(state = 0, action) {
  switch (action.type) {
    case "ADD":
      return state + 1;
    case "MINUS":
      return state - 1;
    default:
      return state;
  }
}

// 定义修改规则 登录
function loginReducer(state = { ...initalUserInfo }, action) {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return {
        isLogin: true,
        user: { name: "xss" },
      };
    case "LOGOUT_SUCCESS":
      return {
        isLogin: false,
        user: { name: null },
      };
    default:
      return state;
  }
}

// 创建
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  combineReducers({ user: loginReducer }, countReducer),
  applyMiddleware(thunk, logger, sagaMiddleware)
);
// 运行
sagaMiddleware.run(mySaga);
export default store;
