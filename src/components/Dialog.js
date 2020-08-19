import React, { Component } from "react";
import "./dialog.less";
// 传送门
import { createPortal } from "react-dom";

export default class Dialog extends Component {
  constructor(props) {
    super(props);
    const doc = window.document;
    this.node = doc.createElement("div");
    doc.body.appendChild(this.node);
  }
  componentWillUnmount() {
    window.document.body.removeChild(this.node);
  }
  render() {
    return createPortal(
      <div class="dialog">
        <h3>Dialog</h3>
        {this.props.children}
      </div>,
      this.node
    );
  }
}
