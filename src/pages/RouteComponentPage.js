import React, { Component, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
export default class RouteComponentPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  render() {
    const { count } = this.state;
    return (
      <div>
        <h3>RouteComponentPage-{count}</h3>
        <button
          onClick={() => {
            this.setState({ count: count + 1 });
          }}
        >
          click
        </button>
        {/* 渲染component的时候会调⽤React.createElement，如果使⽤下⾯这种匿名函数的形
式，每次都会⽣成⼀个新的匿名的函数，导致⽣成的组件的type总是不相同，这个时候会
产⽣重复的卸载和挂载*/}
        <Router>
          <Route render={() => <FunctionChild count={count} />} />
          <Route children={() => <FunctionChild count={count} />} />
        </Router>
      </div>
    );
  }
}

class Child extends Component {
  componentDidMount() {
    console.log("componentdidmount");
  }
  componentWillUnmount() {
    console.log("componentwillunmount");
  }
  render() {
    return <div>child-{this.props.count}</div>;
  }
}

function FunctionChild(props) {
  useEffect(() => {
    return () => {
      console.log("willunmount");
    };
  }, []);
  return <div>child-{props.count}</div>;
}
