 - https://github.com/preactjs/preact/issues/955
 - 
 - 
 - 
 - 
 - 

 ```js
 let instance;  // holds our component instance
let ref = c => {
  // c is the component instance
  instance = c;
};
render(<Foo ref={ref} />, parent)

console.log(instance)
 ```
https://stackoverflow.com/questions/27366077/only-allow-children-of-a-specific-type-in-a-react-component

https://medium.com/@martin_hotell/react-children-composition-patterns-with-typescript-56dfc8923c64


















