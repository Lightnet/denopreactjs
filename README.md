# denopreactjs

# Status:
- Prototype
- Testing

## Require:
- Deno https://deno.land/

# Information:
  Couldn't find the transpiler for http serve from Deno. It seem outdate or remove.

  To develop small file size for Preactjs. But still used react jsx transform by using alias path.
  
  By using the babeljs transform jsx to js is possbile.

  This is bare bone coding to keep the file small as possible. Idea base on nextjs from nodejs and fresh from deno.

  Note using the babel transformSync for transpiler for jsx to js for browser to read and load javascript format to render the doc html. As well the Deno transpiler config. Still testing.

# Database:
 Testing for postgresjs, postgresql

## Require:
- postgresql install.

# run:
```
deno task dev
```
Run the server command.

# Preactjs:
- https://babeljs.io/docs/en/babel-preset-react
- https://babeljs.io/docs/en/babel-plugin-transform-react-jsx
- https://deno.land/manual/jsx_dom/jsx

## packages:
- https://esm.sh/preact/jsx-runtime


# Design:
  To it simple for preact components and page doc render. To note this is dev build mode.

  It would require internet connection for url packages for preact files and other packages that need to load modules.

Button.jsx
```jsx
/** @jsxRuntime classic */
/** @jsx h */
import { h } from "preact"
import { useState } from 'preact/hooks';

export default function Button() {
  // State for the counter
  const [count, setCount] = useState(0);
  function add(){
    setCount(state=>state+1)
  }

  function subtract(){
    setCount(state=>state-1)
  }

  return (<div>
    <button onClick={add}> + </button>
    <button onClick={subtract}> - </button>
    <label>Count: {count}</label>
  </div>)
}

```
App.jsx
```jsx
/** @jsx h */
import { h } from "preact"
import Button from "./components/Button.jsx";

function App() {
  return (<div>
    <Button/>
    <label> App </label>
  </div>)
}

export default App;
```
Note: 
- App root level does not work with preact/hooks that will cause error. __h < error. Use Child example Button.jsx to get it work.
- There is transpiler from babel for http server by using babel transform base on react and jsx plugins.

Client.jsx
```jsx
import { render } from "preact"
import App from "./App.jsx"
render(App(), document.body)
```
Entry point for app build.

# .env:

```
ENVIRONMENT=development
PORT=3000
SECRET=32char
```

# Notes:
- Top root by using preact/hooks will error on __h for dev build testing.
  - Need be child by one level down to work.
- jsx pragma is took a bit understand to work a bit. Need more docs on it.

# Refs:
- https://github.com/exhibitionist-digital/ultra/blob/master/src/server/requestHandler.ts
- https://babeljs.io/docs/en/babel-preset-react
- https://stackoverflow.com/questions/66907992/use-jsx-as-view-engine-in-oak
- https://dev.to/samby_mahapatra/how-to-solve-pragma-and-pragmafrag-can-not-be-set-while-runtime-is-automatic-error-1i4c
- https://michaelcurrin.github.io/dev-cheatsheets/cheatsheets/javascript/deno/
- https://deno.land/manual@v1.1.3/tools/linter
- 