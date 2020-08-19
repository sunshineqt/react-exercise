// react-router包含3个库，react-router、react-router-dom、react-router-native；
// react-router提供最基本的路由功能，实际使用时不要直接安装react-router，而是根据运行
// 环境选择安装react-router-dom（浏览器中）还是react-router-native（rn中）；
// react-router-dom和react-router-native都依赖react-router，所以在安装时，
// react-router也会自动安装，创建web应用

// npm i --save react-router-dom

// react-router中奉行一切皆组件的思想，路由器Router、链接Link、
// 路由Route、独占Switch、重定向Redirect都以组件形式存在
import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import HomePage from "./HomePage";
import UserPage from "./UserPage";
import LoginPage from "./LoginPage";
import PrivateRoute from "./PrivateRoute";

export default class RouterPage extends Component {
  render() {
    return (
      <div>
        <h3>RouterPage</h3>
        <Router>
          <Link to="/">首页</Link>
          <Link to="/user">用户中心</Link>
          <Link to="/login">登录</Link>
          <Link to="/search/123">搜索</Link>
          {/*Route一定要包裹在Router之内，因为Route要使用history location，而这些都来自于Router */}
          {/**path如果不写，则一直匹配 */}
          {/**Switch独占路由 匹配一个 */}
          {/**什么都不写放在最后如404 */}
          <Switch>
            <Route exact path="/" component={HomePage} />
            {/**路由守卫 */}
            <PrivateRoute path="/user" component={UserPage} />
            {/**<Route path="/user" component={UserPage} />*/}
            <Route path="/login" component={LoginPage} />
            {/**动态路由 使⽤:id的形式定义动态路由 使⽤:id的形式定义动态路由 <Link to={"/search/" + searchId}>搜索</Link>*/}
            <Route path="/search/:id" component={SearchComponent} />

            <Route render={() => <div>404</div>} />
          </Switch>
        </Router>
      </div>
    );
  }
}

function DetailComponent(props) {
  return <div>DetailComponent</div>;
}

function SearchComponent(props) {
  console.log(props, "search");
  const { id } = props.match.params;
  return (
    <div>
      searchComponent-{id}
      {/**嵌套路由 */}
      <Link to={"/search/" + id + "/detail"}>详情</Link>
      <Route path={"/search/:" + id + "/detail"} component={DetailComponent} />
    </div>
  );
}

// Route渲染内容的三种方式
// Route渲染优先级：children>component>render
// 三者能接收到同样的[route props]，包括match，location，history，但当不匹配的时候，children的match为null
// 三种方式互斥，之内用一种
// children：func 不管location是否匹配，都需要渲染一些内容，则可以使用children；除了不管location是否匹配都渲染外，其它工作方法与render完全一样
