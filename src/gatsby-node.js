exports.modifyBabelrc = ({ babelrc }) => {
  return {
    ...babelrc,
    plugins: babelrc.plugins.concat([
      ['import', {
        libraryName: 'antd',
        style: 'css'
      }]
    ])
  }
}
