

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map




```js
const routeUrls = new Map();

routeUrls.set(pageName,{
  page:pageModule.default || null,
  fileName:entry.name,
  handler: pageModule.handle || null
})

  //if(routeUrls.has(pathname)==true){
    //console.log("FOUND PAGE!!! ", pathname)
    //for (const [key, value] of routeUrls) {
      //console.log(`KEY , VALUE`)
      //console.log(`${key}: ${value}`)
      //console.log(key)
      //console.log(value)
      //if(key == pathname){
        //console.log("FOUND ROUTE: ", key)
        //break;
      //}
    //}

    //routeUrls.forEach((value, key) => { /* … */ 
      //console.log("value:", value)
      //console.log("key:", key)
      //if(pathname == key){
        //console.log("FOUND DDDD:", value)
      //}
    //})
  //}
```
