// let res = {
//     add:()=>({type:'ADD'}),
//     minus:()=>({type:'MINUS'}),
// };

import React, { Component } from "react";
const ValueContext = React.createContext();

export const connect = (
  mapStateToProps = (state) => state,
  mapDispatchToProps
) => (WrappedComponent) => {
  return class extends Component {
    static contextType = ValueContext;
    constructor(props) {
      super(props);
      this.state = {
        props: {},
      };
    }
    componentDidMount() {
      const { subscribe } = this.context;
      this.update();
      subscribe(() => {
        this.update();
      });
    }
    update = () => {
      const { getState, dispatch, subscribe } = this.context;
      let stateProps = mapStateToProps(getState());
      let dispatchProps;
      if (typeof mapDispatchToProps === "object") {
        dispatchProps = bindActionCreators(mapDispatchToProps, dispatch);
      } else if (typeof mapDispatchToProps === "function") {
        dispatchProps = mapDispatchToProps(dispatch, this.props);
      } else {
        dispatchProps = { dispatch };
      }
      this.setState({
        props: {
          ...stateProps,
          ...dispatchProps,
        },
      });
    };
    render() {
      return <WrappedComponent {...this.props.props} />;
    }
  };
};

export class Provider extends Component {
  render() {
    return (
      <ValueContext.Provider value={this.props.store}>
        {this.props.children}
      </ValueContext.Provider>
    );
  }
}

function bindActionCreator(creator, dispatch) {
  return (...args) => dispatch(creator(...args));
}

export function bindActionCreators(creators, dispatch) {
  const obj = {};
  for (const key in creators) {
    obj[key] = bindActionCreator(creators[key], dispatch);
  }
  return obj;
}
