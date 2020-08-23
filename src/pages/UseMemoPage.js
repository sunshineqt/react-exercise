import React, { useState, useEffect, useMemo } from "react";
export default function (props) {
  const [count, setCount] = useState(0);
  const [value, seValue] = useState("");

  // 当前的计算只和count有关
  const expensive = useMemo(() => {
    console.log("compute");
    let sum = 0;
    for (let i = 0; i < count; i++) {
      sum += i;
    }
    return sum;
    // 只有count改变的时候，当前函数才会重新执行
  }, [count]);
  return (
    <div>
      <h3>usemeomopage</h3>
      <p>count:{count}</p>
      <p>expensive:{expensive()}</p>
      <button onClick={() => setCount(count + 1)}>add</button>
      <input value={value} onChange={(event) => seValue(event.target.value)} />
    </div>
  );
}
