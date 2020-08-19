import React, { Component } from "react";
import { connect } from "react-redux";

export default connect(({ user }) => ({ isLogin: user.isLogin }), {
  logout: () => ({ type: "LOGOUT_SUCCESS" }),
})(
  class UserPage extends Component {
    render() {
      const { logout } = this.props;
      return (
        <div>
          UserPage
          <button onClick={logout}>logout</button>
        </div>
      );
    }
  }
);
