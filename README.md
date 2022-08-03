# denopreactjs

# Status:
- Prototype
- Testing

# Information:
  Couldn't find the transpiler for http serve from Deno. It seem outdate or remove.

  To develop small file size for Preactjs. But still used react jsx transform by using alias path.
  
  By using the babeljs transform jsx to js is possbile.

  This is bare bone coding to keep the file small as possible. Idea base on nextjs from nodejs and fresh from deno.

  Note using the babel transformSync for transpiler for jsx to js for browser to read and load javascript format to render the doc html. As well the Deno transpiler config. Still testing.

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

# Notes:
- Top root by using preact/hooks will error on __h for dev build testing.
  - Need be child by one level down to work.
- jsx pragma is took a bit understand to work a bit.

# Refs:
- https://github.com/exhibitionist-digital/ultra/blob/master/src/server/requestHandler.ts
- https://github.com/exhibitionist-digital/ultra
- https://babeljs.io/docs/en/babel-preset-react
- https://stackoverflow.com/questions/66907992/use-jsx-as-view-engine-in-oak
- https://dev.to/samby_mahapatra/how-to-solve-pragma-and-pragmafrag-can-not-be-set-while-runtime-is-automatic-error-1i4c

