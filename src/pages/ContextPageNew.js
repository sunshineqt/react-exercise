import React from "react";

const Context = React.createContext();
const Provider = Context.Provider;
const Consumer = Context.Consumer;

function Child(props) {
  return (
    <div>
      child
      <p>{props.user.name}</p>
    </div>
  );
}

const stores = {
  user: { name: "sssd" },
};

function ContextPageNew() {
  return (
    <div>
      <Child {...stores} />
      <Provider value={stores}>
        <Consumer>{(ctx) => <Child {...ctx} />}</Consumer>
      </Provider>
    </div>
  );
}

export default ContextPageNew;
