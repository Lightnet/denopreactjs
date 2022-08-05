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

export default function NotifyManager(props) {
  //const [notes, setNotes] = useState([]);
  const { 
    notifies,
    setNotifies,
    notify
  } = useContext(NotifyContext);

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
    //console.log("notify")
    //console.log(crypto.randomUUID())
    //console.log(notify)
    if(typeof notify?.message=='string'){
      console.log("processing...")
      let color = "Info";
      if(notify?.typ){
        color=notify.typ;
      }
      //const _notes = notifies;
      updateNotify(crypto.randomUUID(),{
        color:color,
        message:notify?.message+crypto.randomUUID(),
        autoClose:true
      })
      //console.log(_notes)
      ///setNotifies(_notes)
      //setNotify(null)
    }
  },[notify])

  function onDeleteId(id){
    console.log(id)
    deleteNotify(id)
    //const _notes = notifies;
    //_notes.delete(id)
    //setNotifies(_notes)
    //console.log(notifies)
  }

  return (<div>
    {[...notifies].map(item=><div key={item[0]}>
      {/*console.log(item[1])*/}
      <label>Name:{item[1].message}</label>
      <button onClick={()=>onDeleteId(item[0])}> del </button>
    </div>)}
  </div>)
}