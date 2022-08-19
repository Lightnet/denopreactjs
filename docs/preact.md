
- https://preactjs.com/guide/v10/differences-to-react#main-differences

preact/compat 
- PureComponent
- memo
- forwardRef
- Portals
- Suspense
- lazy:
- 

```js
//...
const ref = createRef();
//...
useEffect(()=>{
//...
console.log(ref.current.parentNode)
if(ref.current.parentNode instanceof HTMLCanvasElement){
  console.log("FOUND HTMLCanvasElement!")
}else{
  console.log("NOT FOUND")
}

},[])
//...

```


```
<App>
  <Parent> node
    <Child>
      - ref > parentNode (get the parent id)
    </Child>
  </Parent>
</App>


```