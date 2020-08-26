import React, { Component } from "react";
import TopBar from "../components/TopBar";
import BottomBar from "../components/BottomBar";

export default class Layout extends Component {
  componentDidMount() {
    const { title = "默认" } = this.props;
    document.title = title;
  }
  render() {
    const { children, showTopBar, showBottomBar } = this.props;
    // const childrenArr = [];
    // if (children.$$typeof) {
    //   // 不具名
    //   childrenArr.push(children);
    // } else {
    //   // 具名
    //   for (let item in children) {
    //     childrenArr.push(children[item]);
    //   }
    // }
    return (
      <div>
        {showTopBar && <TopBar />}
        {/** {childrenArr.map((item, index) => {
          return <React.Fragment key={index}>{item}</React.Fragment>;
        })} */}

        {children.content}
        {children.txt}
        <button onClick={children.btnClick}>btn</button>

        {showBottomBar && <BottomBar />}
      </div>
    );
  }
}
