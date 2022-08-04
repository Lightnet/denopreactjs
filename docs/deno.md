 - https://doc.deno.land/deno/stable
 - https://medium.com/deno-the-complete-reference/deno-nuggets-redirect-a-request-759c37ae995a
 - https://medium.com/deno-the-complete-reference/redirect-a-caller-in-deno-f8b3dae79adf


 
```js
// 
const response = new Response("",{
  status:302,
  headers:{'location':"/"}
});

new Response(undefined, {status: Status.Found,
  headers: {'location', encodeURI(URL)}});
```






