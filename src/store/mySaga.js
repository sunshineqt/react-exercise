// redux-saga是一个用于管理应用程序的副作用的库，类比redux-thunk
// 需要实现的功能：监听（takeEvery）;调用异步操作（call）；状态更新（dispatch，put）；

import { call, put, takeEvery } from "redux-saga/effects";
import { UserService } from "../service/user";
// worker saga
function* loginHandle(action) {
  // 2-调用异步操作
  const res = yield call(UserService.login, { name: "xx" });
  console.log(res, "action1");
  const ress = yield call(UserService.login, { name: "xx" });
  console.log(ress, "action2");
  //   顺序执行，避免了回调地狱
  //  3-状态更新
  yield put({ type: "LOGIN_SUCCESS" });
}

// watcher saga
function* mySaga(props) {
  // 1-监听
  yield takeEvery("login", loginHandle);
}

export default mySaga;
