import React, { Component } from "react";

// HOC 是个函数，接收一个组件，返回一个新的组件
function Child(props) {
  return <div>child</div>;
}
// Cmp这里是function或class组件 双箭头函数
const foo = (Cmp) => (props) => {
  return (
    <div className="border">
      <Cmp {...props} />
    </div>
  );
};

// 等价于双箭头函数
// const foo = (Cmp) => {
//   return (props) => {
//     return (
//       <div className="border">
//         <Cmp {...props} />
//       </div>
//     );
//   };
// };

const foo2 = (Cmp) => (props) => {
  return (
    <div className="border1">
      <Cmp {...props} />
    </div>
  );
};

const Foo = foo2(foo(foo(Child)));
export default class HocPage extends Component {
  render() {
    return (
      <div>
        <h3>HocPage</h3>
        <Foo />
      </div>
    );
  }
}
