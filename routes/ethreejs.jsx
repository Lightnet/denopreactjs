/*
  Project Name: Deno Preactjs
  License: MIT
  Created By: Lightnet
*/

// https://deno.land/manual/jsx_dom/jsx
//for client

/** @jsxRuntime classic */
/** @jsx h */

import { h } from "preact"
//import PageButton from "../components/PageButton.jsx";
import ThreejsProvider from "../components/three/core/ThreejsProvider.jsx"
import ThreejsCanvas from "../components/three/core/ThreejsCanvas.jsx"
import EObject3D from "../components/three/core/EObject3D.jsx"

import ThreejsDebugUI from "../components/three/ui/ThreejsDebugUI.jsx"

//import ECObject3D from "../components/three/ECObject3D.jsx"
//import EObjectTest from "../components/three/EObjectTest.jsx"
//import PCObjTest from "../components/three/PCObjTest.jsx"
import CubeTest from "../components/three/prototypes/CubeTest.jsx"

//for server
//export function handle(req){
  //return new Response("Hello, World!",{status:200,headers:{'Content-Type':'text/html'}});
//}

function Three() {

  return (<div class={""} style="position:fixed;width:100%;height:100%;">
    <ThreejsProvider>
      <ThreejsCanvas>
        <EObject3D></EObject3D>
        <CubeTest></CubeTest>
      </ThreejsCanvas>
      <ThreejsDebugUI>

      </ThreejsDebugUI>
    </ThreejsProvider>
  </div>)
}
/*
<EObject3D>
          <EObjectTest></EObjectTest>
          <EObject3D></EObject3D>
          
        </EObject3D>
        <PCObjTest></PCObjTest>
        <ECObject3D test="tests" />
*/
// <PageButton/>  
export default Three;