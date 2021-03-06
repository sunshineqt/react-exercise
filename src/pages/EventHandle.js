import React, { Component } from "react";

export default class EventHandle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
    };
  }
  submit = () => {
    console.log("submit", this.state.name);
    console.log("ref", this.refs["input"].value); // 获取输入框值
    // 子组件向父组件传递数据
    this.props.tellme("我是事件处理");
  };
  onChange = (event) => {
    this.setState({ name: event.target.value });
  };
  render() {
    const { name } = this.state;
    console.log(this.props.store, "store");
    return (
      <div>
        <h1>EventHandle</h1>
        <input value={name} onChange={this.onChange} ref="input" />
        <button onClick={this.submit}>login</button>
      </div>
    );
  }
}
