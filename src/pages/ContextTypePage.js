// import React, { Component } from "react";
// import { ThemeContext } from "./ThemeContext";

// export default class ContextTypePage extends Component {
//   static contextTypes = ThemeContext;

//   render() {
//     console.log(this, "this");
//     return (
//       <div>
//         <h3>ContextTypePage</h3>
//       </div>
//     );
//   }
// }

import React, { Component } from "react";
import { ThemeContext } from "./ThemeContext";

class ContextTypePage extends Component {
  render() {
    // static contextType = ThemeContext;
    // this.context在任何生命周期都可以访问到

    const { themeColor } = this.context;
    console.log(this, "this");
    return (
      <div className="border">
        <h3 className={themeColor}>ContextTypePage</h3>
      </div>
    );
  }
}
// 只能订阅一个context 并且是类组件

ContextTypePage.contextType = ThemeContext;
export default ContextTypePage;
