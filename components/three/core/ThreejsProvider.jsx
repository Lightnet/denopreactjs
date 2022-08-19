/*
  Project Name: Deno Preactjs
  License: MIT
  Created By: Lightnet

  Information:
    To handle multiple view for scene

*/

// https://github.com/pmndrs/react-three-fiber/blob/master/packages/fiber/src/web/Canvas.tsx
// https://love2dev.com/blog/javascript-remove-from-array/


/** @jsxRuntime classic */
/** @jsx h */

import { h, createContext } from "preact"
import { 
  useEffect, 
  useState, 
  useMemo 
} from "preact/hooks"
import { isObjEmpty } from "../../../libs/helper.js"

export const ThreejsContext = createContext({});

export default function NotifyProvider(props) {

  const [eObject3Ds, setEObject3Ds] = useState(new Map())
  //const [object3Ds, setObject3Ds] = useState(new Map())
  const [object3Ds, setObject3Ds] = useState([])
  const [selectObject3DID, setSelectObject3DID] = useState("")

  const [selectSceneID, setSelectSceneID] = useState("")
  const [scene, setScene] = useState(null) //place holder test
  const [sceneID, setSceneID] = useState("")//place holder test

  const [camera, setCamera] = useState(null) // place holder test

  const [selectReRenderID, setSelectReRenderID] = useState("")
  const [reRender, setReRender] = useState(null) //place holder test
  const [reRenders, setReRenders] = useState(new Map())

  const [isInit, setIsInit] = useState(false);

  //need work later...
  function addObj3D(_obj3D,_id){
    object3Ds.push(_obj3D)
    setObject3Ds(object3Ds)
    scene.add(_obj3D)
  }

  function removeObj3D(_obj3D){
    if(_obj3D){
      //object3Ds.()
      const filtered = object3Ds.filter1(item=>item!==_obj3D)
      setObject3Ds(filtered)
    }
  }

  function assignScene(_id,_scene){
    setSceneID(_id)
    setScene(_scene)
  }

  function addReRender(_id, _render, _scene, _camera, ismain = false){
    //console.log("rerender id: ",_id)
    if(ismain){
      //console.log("MAIN SCENE?")
      setSceneID(_id)
      setScene(_scene)
      setCamera(_camera)
      setReRender(_render)
      setIsInit(true)// for init set up event
    }
    setReRenders(
      new Map(reRenders.set(_id,{render:_render, scene:_scene,camera:_camera}))
    )
  }

  function removeReRender(_id){
    setReRenders(state=>{
      const copy = new Map(state)
      copy.delete(_id)
      return copy;
    });
  }

  useEffect(()=>{
    console.log("init three context")
  },[])

  const values = useMemo(() => {
    return { 
      eObject3Ds, setEObject3Ds,
      object3Ds, setObject3Ds,
      selectObject3DID, setSelectObject3DID,
      selectSceneID, setSelectSceneID,
      selectReRenderID, setSelectReRenderID,
      sceneID, setSceneID,
      scene, setScene,
      assignScene,
      camera, setCamera,
      reRender, setReRender,
      reRenders, setReRenders,
      addObj3D, removeObj3D,
      addReRender, removeReRender,
      isInit, setIsInit
    }
  }, [
    eObject3Ds,
    eObject3Ds,
    selectObject3DID, 
    selectSceneID,
    sceneID,
    selectReRenderID,
    scene,
    camera,
    reRenders,
    isInit
  ])

  return (
    <ThreejsContext.Provider value={values}>
      {props.children}
    </ThreejsContext.Provider>
  )
}
