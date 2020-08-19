import React, { useReducer, useEffect, useState } from "react";

function fruitReducer(state = [], action) {
  switch (action.type) {
    case "INIT":
      return [...action.payload];
    case "REPLACE":
      return [...action.payload];
    case "ADD":
      return [...state, action.payload];
    default:
      return state;
  }
}

function UseReducerPage(props) {
  const [fruits, dispatch] = useReducer(fruitReducer, []);
  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: "INIT", payload: ["apple", "banana"] });
    }, 1000);
  }, []);
  return (
    <div>
      <h3>UseReducerPage</h3>
      <AddFruit
        addFruit={(newFruit) => {
          dispatch({ type: "ADD", payload: newFruit });
        }}
      />
      <FruitList
        fruits={fruits}
        setFruit={(newFruitList) =>
          dispatch({ type: "REPLACE", payload: newFruitList })
        }
      />
    </div>
  );
}

function AddFruit({ fruits, addFruit }) {
  const [name, setName] = useState("");
  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={() => addFruit(name)}>add</button>
    </div>
  );
}

export default UseReducerPage;

function FruitList(props) {
  const { fruits, setFruit } = props;
  const delFruit = (delIndex) => {
    const tem = [...fruits];
    tem.splice(delIndex, 1);
    setFruit(tem);
  };
  return (
    <ul>
      {fruits.map((fruit, index) => (
        <li key={fruit} onClick={() => delFruit(index)}>
          {fruit}
        </li>
      ))}
    </ul>
  );
}
