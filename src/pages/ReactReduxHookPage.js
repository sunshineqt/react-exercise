import React from "react";
import { useSelector, useDispatch, useCallback } from "react-redux";
export default function ReactReduxHookPage(props) {
  const count = useSelector(({ count }) => count);
  const dispatch = useDispatch();
  const add = useCallback(() => {
    dispatch({ type: "ADD" });
  }, []);
  return (
    <div>
      <p>{count}</p>
      <button onClick={add}>add</button>
    </div>
  );
}
