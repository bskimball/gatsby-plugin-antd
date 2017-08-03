exports.modifyBabelrc = ({ babelrc }) => {
  return {
    plugins: babelrc.plugins.concat([
      'import', {
        libraryName: 'antd',
        style: 'css'
      }
    ])
  }
}
