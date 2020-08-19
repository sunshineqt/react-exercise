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
    return (
      <div>
        {showTopBar && <TopBar />}
        {children.content}
        {children.txt}
        <button onClick={children.btnClick}>btn</button>
        {showBottomBar && <BottomBar />}
      </div>
    );
  }
}
