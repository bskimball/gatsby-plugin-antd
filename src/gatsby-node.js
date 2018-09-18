exports.onCreateBabelConfig = ({ actions }, { style }) => {
  actions.setBabelPlugin({
    name: `babel-plugin-import`,
    options: {
      libraryName: 'antd',
      style: (style === true) ? style : 'css',
    },
  })
}
