exports.onCreateBabelConfig = ({ actions }, { style }) => {
  actions.setBabelPlugin({
    name: `babel-plugin-import`,
    options: {
      libraryName: "antd",
      libraryDirectory: "es",
      style: style === true ? style : "css"
    }
  });
};
