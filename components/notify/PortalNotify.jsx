/*
  Project Name: Deno Preactjs
  License: MIT
  Created By: Lightnet
*/

/** @jsx h */
import { h } from "preact"
import { 
  useState,
  useEffect, 
  useContext } from 'preact/hooks';
import { NotifyContext } from "./NotifyProvider.jsx"
import NotifyContainer from "./NotifyContainer.jsx"
import { createPortal } from 'preact/compat';

export default function PortalNotify(props) {

  const { 
    notifies,
    setNotifies,
    notify
  } = useContext(NotifyContext);

  const deleteNotify = (k) => {
    //console.log(k)
    setNotifies(state=>{
      const copy = new Map(state)
      copy.delete(k)
      return copy;
    });
  }

  function onDeleteId(id){
    //console.log(id)
    deleteNotify(id)
  }

  return (<div id="notifies" style="position:fixed; float:right; top:0px;right:0px;">
    {[...notifies].map(item=>
      <NotifyContainer key={item[0]} {...item[1]} onClose={()=>onDeleteId(item[0])}/>
    )}
  </div>)
}
//{[...notifies].map(item=><NotifyContainer key={item[0]} {...item[1]} onClose={()=>onDeleteId(item[0])}/>)}