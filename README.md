# gatsby-plugin-antd
Use Ant Design with Gatsby

** for Gatsby v2 please refer to the v2 branch https://github.com/bskimball/gatsby-plugin-antd/tree/v2 **

## Install
`npm install gatsby-plugin-antd@^1.0.0 --save`

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

