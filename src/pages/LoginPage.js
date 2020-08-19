import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

export default connect(
  // mapStateToProps
  ({ user }) => ({ isLogin: user.isLogin }),
  // mapDispatchToProps
  {
    // 使用loginReducer时候的写法
    // login: () => ({ type: "LOGIN_SUCCESS" }),
    // 使用redux-saga的写法
    login: () => ({ type: "login" }),
  }
)(
  class LoginPage extends Component {
    render() {
      const { isLogin, login, location } = this.props;
      // 如果已经登录，则跳回之前PrivateRoute.js存储的页面路径state中的redirect
      // 如果直接输入路由login而不是从PrivateRoute页面进来会报错，要给个默认值
      const { redirect = "/" } = location.state || {};
      if (isLogin) {
        return <Redirect to={redirect} />;
      } else {
        return (
          <div>
            <h3>LoginPage</h3>
            <button onClick={login}>login</button>
          </div>
        );
      }
    }
  }
);
