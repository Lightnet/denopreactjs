/*
  Project Name: Deno Preactjs
  License: MIT
  Created By: Lightnet

  Information:
    Multiple cannon worlds in case of instance independent for editor testing, another world loading... 

*/

/** @jsxRuntime classic */
/** @jsx h */

import { 
  h
, createRef
, Fragment
, options
, createContext
} from "preact"
import {
  useState
, useEffect
, useContext
, useMemo
, useCallback
} from "preact/hooks"

import * as CANNON from "https://unpkg.com/cannon-es@0.20.0/dist/cannon-es.js"
// import { World } from 'cannon-es'
// import * as CANNON from 'cannon-es'
import useAnimationFrame from "../../helpers/useAnimationFrame.jsx";

export const CannonContext = createContext({});

//stand alone
export function CannonPhysics(props){

  const ref = createRef();
  const [divID, setDivID] = useState(crypto.randomUUID());
  const [initPhysics, setInitPhysics] = useState(false);
  const [world, setWorld] = useState(null);

  //need to check threejs is set up before init?
  useEffect(()=>{
    init()
  },[])

  function init(){
    const _world = new CANNON.World({
      gravity: new CANNON.Vec3(0, -9.82, 0), // m/s²
    })
    setWorld(_world);
  }

  const updateFrame = useCallback(()=>{
    //console.log("divID: ",divID)
    if(world){
      //console.log("WORLD FOUND")
      world.fixedStep()
    }else{
      //console.log("NOT WORLD FOUND")
    }
  },[world])//need variable for update listen else it null after update

  useAnimationFrame(updateFrame);

  return (<div id={divID} ref={ref}>
    {props.children}
  </div>)
}

//cannon context
export default function CannonProvider(props) {

  const [worlds, setWorlds] = useState([]);
  const [enablePhysics, setEnablePhysics] = useState(true);

  const values = useMemo(() => {
    return { 
      worlds, setWorlds,
      enablePhysics, setEnablePhysics
    }
  }, [
    worlds,
    enablePhysics
  ])

  return (
    <CannonContext.Provider value={values}>
      {props.children}
    </CannonContext.Provider>
  )
}
