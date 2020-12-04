import React, { Component } from "react";
import TreeNode from "../components/TreeNode";

const treeData = {
  key: 0,
  title: "全国",
  children: [
    {
      key: 6,
      title: "北方",
      children: [
        {
          key: 1,
          title: "黑龙江省",
          children: [
            {
              key: 6,
              title: "哈尔滨",
            },
          ],
        },
        {
          key: 2,
          title: "北京",
        },
      ],
    },
    {
      key: 3,
      title: "南方",
      children: [
        {
          key: 4,
          title: "上海",
        },
        {
          key: 5,
          title: "深圳",
        },
      ],
    },
  ],
};

export default class TreePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
    };
  }
  componentDidMount() {
    // 放入更新队列，统一执行，后面会覆盖前面的
    this.setState({ count: this.state.count + 1 }, () => {
      console.log(this.state.count, "执行第1次回调"); // 4
    });
    console.log(this.state.count, "执行第1次"); //1
    this.setState({ count: this.state.count + 2 }, () => {
      console.log(this.state.count, "执行第2次回调"); //4
    });
    console.log(this.state.count, "执行第2次"); //1
    this.setState({ count: this.state.count + 3 }, () => {
      console.log(this.state.count, "执行第3次回调"); //4
    });
    console.log(this.state.count, "执行第3次"); //1
  }
  render() {
    return (
      <div>
        <h1>treepage</h1>
        <TreeNode data={treeData} />
        {this.state.count}
      </div>
    );
  }
}
