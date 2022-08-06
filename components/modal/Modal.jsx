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
  
  const [width, setWidth] = useState(Number(props.width) || 200);
  const [height, setHeight] = useState(Number(props.height) || 100);

  const ref = createRef();

  const [offSet, setOffSet] = useState({x:0,y:0});
  const [translate, setTranslate] = useState({x:0,y:0});
  const [isDrag, setIsDrag] = useState(false);
  const [enableDrag, setEnableDrag] = useState(props.enabledrag ||false);

  //useEffect(()=>{
    //console.log("props?.width: ",props?.width)
    //console.log("typeof width: ", typeof props?.width)
    //if(typeof props?.width==='string'){// <Modal isShow={isShowModal} onClose={onClose} enabledrag>
      //setWidth(Number(props.width));
    //}
  //},[props?.width])

  //useEffect(()=>{
    //console.log("props?.height: ",props?.height)
    //console.log("typeof height: ", typeof props?.height)
    //if(typeof props?.height==='string'){// <Modal isShow={isShowModal} onClose={onClose} enabledrag>
      //setHeight(Number(props.height));
    //}
  //},[props?.height])

  //useEffect(()=>{
    //if(typeof props?.enabledrag==='boolean'){// <Modal isShow={isShowModal} onClose={onClose} enabledrag>
      //setEnableDrag(props.enabledrag);
    //}
  //},[props?.enabledrag])

  useEffect(()=>{
    //console.log(width);
    //console.log(height);
    //console.log(ref)
    if(typeof document === 'undefined'){
      return;
    }

    //console.log(document.body.clientWidth)
    //console.log(document.body.clientHeight)
    //console.log(ref)
    setTranslate({
      x: (document.body.clientWidth / 2) - (width/2)
     , y: (document.body.clientHeight / 2) - (height/2)
    })

    return ()=>{//clean up

    }
  },[])

  useEffect(()=>{
    //console.log(width);
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
    if(!enableDrag){return;}
    //event.stopPropogation()
    //event.preventDefault()
    //console.log(ref)
    event = event || window.event;

    const {scrollLeft, scrollTop, clientLeft, clientTop} = document.body;
    const {left, top} = ref.current.getBoundingClientRect();

    setOffSet({
      x: event.pageX - (left + scrollLeft - clientLeft)
      , y: event.pageY - (top + scrollTop - clientTop)
    })

    setIsDrag(true);
  }

  function MouseMove(event){
    if(!enableDrag){return;}
    if(isDrag){
      //event.stopPropogation()
      //event.preventDefault()
      //console.log("move?")
      event = event || window.event;
      setTranslate({
        x: event.pageX - offSet.x,
        y: event.pageY - offSet.y
      })
      //console.log(translate);
    }
  }

  function MouseUp(e){
    if(!enableDrag){return;}
    //event.stopPropogation()
    //event.preventDefault()
    setIsDrag(false);
  }

  function MouseOut(event){
    if(!enableDrag){return;}
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