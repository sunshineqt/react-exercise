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
  render() {
    return (
      <div>
        <h1>treepage</h1>
        <TreeNode data={treeData} />
      </div>
    );
  }
}
