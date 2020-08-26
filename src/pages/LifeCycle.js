import React, { Component } from "react";

export default class LifeCycle extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
    console.log("constructor", this.state);
  }
  UNSAFE_componentWillMount() {
    console.log("componentWillMount", this.state);
  }
  componentDidMount() {
    console.log("componentDidMount", this.state);
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate", this.state);
    // return true;
    return nextState.counter !== 3;
  }
  UNSAFE_componentWillUpdate() {
    console.log("componentWillUpdate", this.state);
  }
  componentDidUpdate() {
    console.log("componentDidUpdate", this.state);
  }
  setCounter = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };
  render() {
    console.log("render", this.state);
    const { counter } = this.state;
    return (
      <div>
        <h3>LifeCycle</h3>
        <p>{counter}</p>
        <button onClick={this.setCounter}>setCounter</button>
        {counter !== 2 && <Foo counter={counter} />}
      </div>
    );
  }
}

class Foo extends Component {
  UNSAFE_componentWillReceiveProps(props) {
    // 只有在挂载的组件接收到的props变化的时候才会执行
    console.log("Foo componentWillReceiveProps", props);
  }
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }
  render() {
    const { counter } = this.props;
    return (
      <div>
        <h1>Foo</h1>
        <p>{counter}</p>
      </div>
    );
  }
}

// 初始化：constructor =》 componentWillMount =》 render =》componentDidMount 除render外只执行一次

// 更新：shouldComponentUpdate =》componentWillUpdate =》render=》componentWillReceiveProps =》componentDidUpdate

// 卸载：shouldComponentUpdate =》componentWillUpdate =》render =》componentWillUnmount =》componentDidUpdate
