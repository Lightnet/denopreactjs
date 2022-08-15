/*
  Project Name: Deno Preactjs
  License: MIT
  Created By: Lightnet
*/

// https://discourse.threejs.org/t/get-canvas-with-threejs-behind-al-the-dom-elements/37369/3

/*
<canvas id="canvas"></canvas>

const renderer = new THREE.WebGLRenderer({ canvas: canvas });

*/

/** @jsxRuntime classic */
/** @jsx h */

import { h, Fragment, createRef } from "preact"
import { useState, useEffect} from "preact/hooks"
//import PageButton from "../components/PageButton.jsx";
import * as THREE from "https://unpkg.com/three@0.143.0/build/three.module.js";


function ThreeCanvas(props) {

  const ref = createRef();

  const [scene, setScene] = useState(null);
  const [camera, setCamera] = useState(null);
  const [renderer, setRenderer] = useState(null);

  const [cube, setCube] = useState(null);

  useEffect(()=>{
    console.log(props)
    Init();
    return ()=>{//clean up
      console.log("CLEAN UP")
      window.removeEventListener("resize", windowResize)
    }
  },[])

  useEffect(()=>{
    if(renderer){//does need to check if variable is set to start else null on loop frame
      animate();
      setupEvents();''
    }
  },[renderer])

  function Init(){
    const _scene = new THREE.Scene();
    const _camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
    
    const _renderer = new THREE.WebGLRenderer();
    _renderer.setSize( window.innerWidth, window.innerHeight );

    const geometry = new THREE.BoxGeometry( 1, 1, 1 );
    const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    const _cube = new THREE.Mesh( geometry, material );
    _scene.add( _cube );
    _camera.position.z = 5;

    const idtag = document.getElementById("threejs")
    idtag.appendChild( _renderer.domElement );

    setScene(_scene)
    setCamera(_camera)
    setRenderer(_renderer)
    setCube(_cube)

    console.log("init threejs")
    //console.log(ref)
    console.log("INIT...")
  }

  function setupEvents(){
    window.addEventListener("resize", windowResize)
  }

  function animate() {
    requestAnimationFrame( animate );
    //console.log(renderer)
    if(!renderer){
      return;
    }
    
    renderer.render( scene, camera );
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render( scene, camera );
  }

  function windowResize(){
    console.log("resize")
    //console.log(renderer)
    if(renderer){
      renderer.setSize( window.innerWidth, window.innerHeight );
    }
  }

  return (<Fragment ref={ref}>
    <div id="threejs">
      {props.children}
    </div>
    
  </Fragment>)
}

export default ThreeCanvas;