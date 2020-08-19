const { override, fixBabelImports, addLessLoader } = require("customize-cra");
const { addDecoratorsLegacy } = require("customize-cra");

module.exports = override(
  // antd按需加载配置
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: true,
  }),
  //   主题样式配置
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { "@primary-color": "red" },
  }),
  addDecoratorsLegacy() // 配置装饰器
);
