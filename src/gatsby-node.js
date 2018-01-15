exports.modifyBabelrc = ( {babelrc}, {style} ) => {
  return {
    ...babelrc,
    plugins: babelrc.plugins.concat([
      ['import', {
        libraryName: 'antd',
        style: (style) ? style : 'css'
      }]
    ])
  }
}
