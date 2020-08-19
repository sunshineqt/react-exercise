import React, { Component } from "react";
import Layout from "./Layout";
import "./HomePage.less";
export default class HomePage extends Component {
  render() {
    return (
      <Layout showBottomBar={true} showTopBar={false} title="首页">
        {{
          content: (
            <div>
              <h3>home page</h3>
            </div>
          ),
          txt: "文本文本具名插槽",
          btnClick: () => {
            console.log("1111");
          },
        }}
      </Layout>
    );
  }
}
