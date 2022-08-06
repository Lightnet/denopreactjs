/*
  Project Name: Deno Preactjs
  License: MIT
  Created By: Lightnet
*/

/** @jsx h */
import { h, createRef } from "preact"
import { useState, useEffect  } from 'preact/hooks';

/*
props:
-height
-width
-x
-y
-isDrag
-resize
*/

export default function Modal(props) {

  const [isOpen, setIsOpen] = useState(false);
  
  const [width, setWidth] = useState(props.width || 200);
  const [height, setHeight] = useState(props.width || 100);

  const ref = createRef();

  const [offSet, setOffSet] = useState({x:0,y:0});
  const [initial, setInitial] = useState({x:0,y:0});
  const [translate, setTranslate] = useState({x:0,y:0});
  const [isDrag, setIsDrag] = useState(false);

  useEffect(()=>{
    console.log(width);
    console.log(ref)
    return ()=>{//clean up

    }
  },[])

  useEffect(()=>{
    console.log(width);
    //console.log(props.isShow)
    if(typeof props.isShow == 'boolean'){
      setIsOpen(props.isShow)
    }
  },[props?.isShow])

  function onClose(){
    if(typeof props.onClose === 'function'){
      props.onClose();
    }
  }

  function MouseDown(event){
    //event.stopPropogation()
    //event.preventDefault()
    console.log(ref)
    event = event || window.event;

    const {scrollLeft, scrollTop, clientLeft, clientTop} = document.body;
    const {left, top} = ref.current.getBoundingClientRect();

    setOffSet({
      x: event.pageX - (left + scrollLeft - clientLeft)
      , y: event.pageY - (top + scrollTop - clientTop)
    })

    //setOffSet({x: event.offsetX, y: event.offsetY})
    //setInitial({
      //x: event.offsetX, 
      //y: event.offsetY
    //});
    setIsDrag(true);
  }

  function MouseMove(event){
    if(isDrag){
      //event.stopPropogation()
      //event.preventDefault()
      console.log("move?")
      event = event || window.event;
      setTranslate({
        x: event.pageX - offSet.x,
        y: event.pageY - offSet.y
      })

      //setTranslate({
        //x: initial.x - event.movementX,
        //y: initial.y - event.movementY
      //})
      //console.log(ref)
      console.log(translate);
    }
  }

  function MouseUp(e){
    //event.stopPropogation()
    //event.preventDefault()
    console.log(ref)
    console.log("UP MOUSE")
    //if(ref.current){
      //ref.current.removeEventListener('mousemove',MouseMove)
    //}
    setIsDrag(false);
  }

  function MouseOut(event){
    console.log(ref)
    console.log("OUT MOUSE")
    //event.stopPropogation()
    event.preventDefault()

    setIsDrag(false);
  }

  if(!isOpen){
    return (null)
  }

  return (<div 
    ref={ref} 
    class="modal" 
    style={`position:absolute; width:${width}px; height:${height}px; left:${translate.x}px; top:${translate.y}px;`}

      >
    <div class="modal_header" onMouseDown={MouseDown} onMouseUp={MouseUp} onMouseMove={MouseMove} onMouseOut={MouseOut}>
      <label>Modal</label>
      <span style="float:right;">
        <button onClick={onClose}> x </button>
      </span>
    </div>
    <div class={`modal_panel`}>
      {props.children}
    </div>
  </div>)
}
/*
<p> Content </p>
*/