import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
// connect帮助组件获得store，本质上是一个高阶组件，返回了一个新的组件

export default connect(
  // 第一个参数为mapStateToProps 是一个函数，可以获取state 把state映射到了props上
  (state) => ({ count: state }),
  // 第二个参数为mapDispatchToProps 是一个对象也可以是一个函数，不定义的话默认注入dispatch
  //   1-对象形式，下面调用时用add方法即可
  //   {
  //     add: () => ({ type: "ADD" }),
  //   }
  //   2-函数形式，下面调用时用dispatch方法
  //   (dispatch) => {
  //     return { dispatch };
  //   }
  // add和dispatch都返回
  (dispatch) => {
    // let res = {
    //   add: () => dispatch({ type: "ADD" }),
    //   minus: () => dispatch({ type: "MINUS" }),
    // };
    // 为了不用每次都写dispatch，可以使用redux库中的bindActionCreators方法包裹
    let res = {
      add: () => ({ type: "ADD" }),
      minus: () => ({ type: "MINUS" }),
    };
    res = bindActionCreators(res, dispatch);
    return { dispatch, ...res };
  }
)(
  class ReactReduxPage extends Component {
    render() {
      console.log(this.props, "props");
      //   connect中没有定义mapDispatchToProps时，默认注入dispatch，
      // const { count, dispatch } = this.props;
      // 如果定义了该参数，则没有默认的dispatch，会有自己定义的方法存在 如add
      const { count, add, dispatch, minus } = this.props;
      // <button onClick={() => dispatch({ type: "ADD" })}>
      // add-use-dispatch //{" "}
      // </button>
      return (
        <div>
          <h3>ReactReduxPage</h3>
          <p>{count}</p>
          <button onClick={add}>add</button>
          <button onClick={() => dispatch({ type: "ADD" })}>
            add-use-dispatch
          </button>
          <button onClick={minus}>minus</button>
        </div>
      );
    }
  }
);
