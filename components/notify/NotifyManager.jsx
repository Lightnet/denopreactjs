/*
  Project Name: Deno Preactjs
  License: MIT
  Created By: Lightnet
*/

// https://preactjs.com/guide/v10/switching-to-preact/#portals
// https://medium.com/swlh/using-es6-map-with-react-state-hooks-800b91eedd5f
// https://usehooks-ts.com/react-hook/use-map

/** @jsx h */
import { h } from "preact"
import { 
 useState,
 useEffect, 
 useContext } from 'preact/hooks';
import { NotifyContext } from "./NotifyProvider.jsx"
import NotifyContainer from "./NotifyContainer.jsx"
//import { createPortal } from 'preact/compat';

export default function NotifyManager(props) {
  //const [notes, setNotes] = useState([]);
  const { 
    notifies,
    setNotifies,
    notify
  } = useContext(NotifyContext);
  const container = document.getElementById('notifies');

  const updateNotify = (k,v) => {
    setNotifies(new Map(notifies.set(k,v)));
  }

  const deleteNotify = (k) => {
    console.log(k)
    setNotifies(state=>{
      const copy = new Map(state)
      copy.delete(k)
      return copy;
    });
  }

  useEffect(()=>{
    //console.log("notify", notify)
    if(typeof notify?.message=='string'){
      console.log("processing...")

      updateNotify(crypto.randomUUID(),{
        color:notify?.typ || "info",
        message:notify?.message+crypto.randomUUID() || "None",
        autoClose: notify?.autoClose || true,
        closeTime: notify?.time || 5
      })
    }
  },[notify])

  function onDeleteId(id){
    //console.log(id)
    deleteNotify(id)
  }

  return (<div>
    {/*[...notifies].map(item=>

    createPortal(<NotifyContainer key={item[0]} {...item[1]} onClose={()=>onDeleteId(item[0])}/>, container)
    
    )*/}
  </div>)
}
/*
createPortal(<NotifyContainer key={item[0]} {...item[1]} onClose={()=>onDeleteId(item[0])}/>, container)//not possible

{[...notifies].map(item=><div key={item[0]}>
  <label>Name:{item[1].message}</label>
  <button onClick={()=>onDeleteId(item[0])}> del </button>
</div>)}
*/