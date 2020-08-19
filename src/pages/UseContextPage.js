import React, { useState, useEffect, useContext } from "react";

import { MyContext } from "../AppContext";

export default function UseContext(props) {
  const ctx = useContext(MyContext);
  console.log("ctx", ctx);
  return (
    <div className={ctx.themeColor}>
      <h3>UseContext</h3>
    </div>
  );
}
