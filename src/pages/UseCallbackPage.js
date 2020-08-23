import React, { useState, useEffect, PureComponent, useCallback } from "react";

export default function UseCallbackPage(props) {
  const [count, setCount] = useState(0);

  const addClick = useCallback(() => {
    let sum = 0;
    for (let i = 0; i < count; i++) {
      sum += i;
    }
    return sum;
    // 只有count改变的时候，当前函数才会重新执行
  }, [count]);
  const [value, setValue] = useState("");
  return (
    <div>
      <h3>usecallbackpage</h3>
      <p>count:{count}</p>
      <button onClick={() => setCount(count + 1)}>add</button>
      <input value={value} onChange={(event) => setValue(event.target.value)} />
      <Child addClick={addClick} />
    </div>
  );
}

class Child extends PureComponent {
  render() {
    const { addClick } = this.props;
    return (
      <div>
        <h3>child</h3>
        <button onClick={() => console.log(addClick())}>add</button>
      </div>
    );
  }
}
