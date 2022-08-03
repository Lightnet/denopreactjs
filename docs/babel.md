


https://github.com/solidjs/solid/discussions/332
```js
import babelCore from "https://dev.jspm.io/@babel/core";
import babelSyntaxJsx from "https://dev.jspm.io/@babel/plugin-syntax-jsx";

const result = babelCore.transform(svgText, {
    plugins: [babelSyntaxJsx],
    configFile: false,
  })
```

https://www.babeljs.cn/docs/babel-plugin-transform-react-jsx
