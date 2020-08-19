import React, { Component } from "react";

// HOC 是个函数，接收一个组件，返回一个新的组件

// Cmp这里是function或class组件 双箭头函数
const foo = (Cmp) => (props) => {
  return (
    <div className="border">
      <Cmp {...props} />
    </div>
  );
};

const foo2 = (Cmp) => (props) => {
  return (
    <div className="border1">
      <Cmp {...props} />
    </div>
  );
};

@foo
@foo2
@foo
class Child extends Component {
  render() {
    return <div>child</div>;
  }
}

export default class DecoratorsPage extends Component {
  render() {
    return (
      <div>
        <h3>DecoratorsPage</h3>
        <Child />
      </div>
    );
  }
}
