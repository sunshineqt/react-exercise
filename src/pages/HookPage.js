import React, { useState, useEffect } from "react";
export default function HookPage(props) {
  // 定义一个叫count的state变量，初始化为0
  const [count, setCount] = useState(0);
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    // 只需要在count发生改变时候执行就可以
    document.title = `点击了${count}次`;
  }, [count]); // 只在count发生改变时执行
  useEffect(() => {
    // 只需要在didMount时候执行就可以了
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);
    // 清除定时器，类似willUnmount
    return () => clearInterval(timer);
  }, []); // []空数组不依赖任何项,空数组时相当于didMount生命周期
  return (
    <div>
      <h3>HookPage</h3>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>add</button>
      <p>{date.toLocaleTimeString()}</p>
    </div>
  );
}
