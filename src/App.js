import React from "react";
// 设置样式模块，避免样式覆盖
import styles from "./index.module.css";
// import Button from "antd/es/button";
// import "antd/dist/antd.css";

// import { Button } from "antd";
// import HomePage from "./pages/HomePage.js";
// import HocPage from "./pages/HocPage.js";
// import DecoratorsPage from "./pages/DecoratorsPage.js";
// import FormPage from "./pages/FormPage.js";
// import FormPage2 from "./pages/FormPage2.js";
// import DialogPage from "./pages/DialogPage.js";
// import ContextPage from "./pages/ContextPage.js";
// import ReduxPage from "./pages/ReduxPage.js";
// import ReactReduxPage from "./pages/ReactReduxPage.js";
// import RouterPage from "./pages/RouterPage.js";
// import RouteChildren from "./pages/RouteChildren.js";
// import RouteComponentPage from "./pages/RouteComponentPage.js";
import UseReducerPage from "./pages/UseReducerPage.js";
// import UseContextPage from "./pages/UseContextPage.js";
import { MyContext } from "./AppContext";
import AntdFormPage from "./pages/AntdForm4.js";
import { FunctionComponent } from "./pages/FunctionComponent.js";
import ClassComponent from "./pages/ClassComponent.js";

function App() {
  return (
    <div className={styles.app}>
      <AntdFormPage />
      <FunctionComponent />
      <ClassComponent />
      <MyContext.Provider value={{ themeColor: "red" }}>
        <UseReducerPage />
      </MyContext.Provider>
      <div className={styles.color}>kkk</div>
    </div>
  );
}

export default App;
