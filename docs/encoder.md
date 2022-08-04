https://javascript.info/text-decoder



```js
const helloworld = new TextEncoder().encode("hello world");
console.log(helloworld)
const hw2 = new TextDecoder().decode(helloworld)
console.log(hw2)
```











