import React, { Component } from "react";
import "./treenode.less";

export default class TreeNode extends Component {
  constructor(props) {
    super(props);
    // 箭头是否展开
    this.state = {
      expanded: false,
      selected: false,
    };
  }
  selectedFunc = (e, title, key) => {
    // console.log(e, title, key, "e-title-key");
    const { selected } = this.state;
    this.setState({ selected: !selected });
    console.log("你选择的是" + title + ",key值为" + key);
  };
  render() {
    const { title, key, children } = this.props.data;
    console.log(children, "children");
    const { expanded, selected } = this.state;
    const hasChildren = children && children.length > 0;
    return (
      <div>
        <div className="nodesInner">
          {hasChildren && (
            <i
              onClick={() => this.setState({ expanded: !expanded })}
              className={"tri " + (expanded ? "tri-open" : "tri-close")}
            ></i>
          )}
          <span
            onClick={(e) => this.selectedFunc(e, title, key)}
            className={"tri-leaf " + (selected ? "tri-leaf-selected" : " ")}
          >
            {title}
          </span>
        </div>
        {/**递归，自己调用自己 */}
        {hasChildren && expanded && (
          <div className="children">
            {children.map((item) => {
              return <TreeNode key={item.key} data={item} />;
            })}
          </div>
        )}
      </div>
    );
  }
}
