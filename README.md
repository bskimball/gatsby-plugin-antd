[![npm package](https://img.shields.io/npm/v/gatsby-plugin-antd.svg?style=flat-square)](https://www.npmjs.org/package/gatsby-plugin-antd)

# gatsby-plugin-antd
Use Ant Design with Gatsby

## Install
`npm install antd gatsby-plugin-antd less gatsby-plugin-less --save`

## How to use
1. Include the plugin in your `gatsby-config.js` file.

```javascript
// in gatsby-config.js
plugins: [
  'gatsby-plugin-antd'
]
// or if you want to use less
plugins: [
  {
      resolve: 'gatsby-plugin-antd',
      options: {
        style: true
      }
  },
  {
    resolve: "gatsby-plugin-less",
    options: {
      javascriptEnabled: true,
    },
  }
]
```
note: if you are using less then you need to install less

2. In your component(s) include the Ant Design component using dynamic imports as suggested here https://ant.design/docs/react/getting-started#Import-on-Demand

```javascript
// in your component
import { Button } from 'antd'

export default () => <Button type="primary">Primary</Button>
```

3. It will pull in the component and the relevant css file using babel-plugin-import

