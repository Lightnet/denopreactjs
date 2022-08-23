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


import ThreejsProvider from "../components/three/core/ThreejsProvider.jsx"
import ThreejsCanvas from "../components/three/core/ThreejsCanvas.jsx"
import EObject3D from "../components/three/core/EObject3D.jsx"
import CannonProvider,{CannonPhysics} from "../components/three/physics/cannon/CannonPhysics.jsx"
import CubeTest from "../components/three/prototypes/CubeTest.jsx"
import ThreejsDebugUI from "../components/three/ui/ThreejsDebugUI.jsx"

//for server
//export function handle(req){
  //return new Response("Hello, World!",{status:200,headers:{'Content-Type':'text/html'}});
//}

function Cannon() {

  return (<div class={""} style="position:fixed;width:100%;height:100%;">
    <CannonProvider>
      <CannonPhysics>
      <ThreejsProvider>
        <ThreejsCanvas>
          <EObject3D></EObject3D>
          <CubeTest></CubeTest>
        </ThreejsCanvas>
      </ThreejsProvider>
      </CannonPhysics>
    </CannonProvider>
  </div>)
}
/*
<ThreejsDebugUI></ThreejsDebugUI>

*/
export default Cannon;