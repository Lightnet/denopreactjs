```js
import * as babelCore from "https://esm.sh/@babel/core";
import * as presetReact from "https://esm.sh/@babel/preset-react";
import transformReactJsx from "https://esm.sh/@babel/plugin-transform-react-jsx@7.18.6";


let codesrc =`
/** @jsx Preact.h */
/** @jsxFrag Preact.Fragment */
import { h } from "preact"
import { useState } from 'preact/hooks';
console.log("Hello WOrld!")
function Test(){return (<><div>Test</div></>)}`;

let result = babelCore.transformSync(codesrc, {
  "presets": [presetReact],
  "plugins": [transformReactJsx],
});
console.log(result.code)
```
```jsx
/** @jsx Preact.h */
import * as Preact from "preact"
```

```jsx
/** @jsx h */ 
import { h } from "preact"
```
Note there two ways to handle jsx render.
```jsx
/** @jsxFrag Preact.Fragment */
function Test(){
  return (<>
    <div>Test</div>
  </>)
};
```
Note that <></> is Fragment.

It can be found in babel > transform docs.

```jsx
/** @jsxImportSource https://esm.sh/preact */

```





```js

//not working require url 

const result = await emit(url,{
        bundle: "module",
        //importMapPath: importMapPath,
        importMapPath: new URL('import_map.json', import.meta.url).toString(),
        importMap: {
          imports: {
            "lodash": "https://deno.land/x/lodash",
            "preact": "https://esm.sh/preact",
          },
        }
      });
      console.log("result")
      console.log(result)
      const code = result[url.href];
      console.log(code);
```
Note wanted to be stand alone for file loading.