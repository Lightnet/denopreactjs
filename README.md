# denopreactjs


# Information:
  Couldn't find the transpiler for http serve from Deno. It seem outdate or remove.
  
  By using the babeljs transform jsx to js is possbile.

  This is bare bone coding to keep the file small as possible. Idea base on nextjs from nodejs and fresh from deno.

# Preactjs:
- https://babeljs.io/docs/en/babel-preset-react
- https://babeljs.io/docs/en/babel-plugin-transform-react-jsx
- https://deno.land/manual/jsx_dom/jsx

## packages:
- https://esm.sh/preact/jsx-runtime


```jsx
/** @jsxImportSource https://esm.sh/preact */
/** @jsx Preact.h */
/** @jsxFrag Preact.Fragment */
```

Index.jsx
```jsx
/** @jsxRuntime classic */
/** @jsx h */
import { h } from "preact"
```

- https://deno.land/manual/jsx_dom/jsx
```jsx
/** @jsxImportSource https://esm.sh/preact */
```



# Notes:
- Top root by using preact/hooks will error on __h for dev build testing.


# Refs:
- https://github.com/exhibitionist-digital/ultra/blob/master/src/server/requestHandler.ts
- https://github.com/exhibitionist-digital/ultra
- https://babeljs.io/docs/en/babel-preset-react
- https://stackoverflow.com/questions/66907992/use-jsx-as-view-engine-in-oak
- https://dev.to/samby_mahapatra/how-to-solve-pragma-and-pragmafrag-can-not-be-set-while-runtime-is-automatic-error-1i4c


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

