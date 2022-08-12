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
import {useState,useEffect} from "preact/hooks"
//import PageButton from "../components/PageButton.jsx";
import * as THREE from "https://unpkg.com/three@0.143.0/build/three.module.js";

//for server
//export function handle(req){
  //return new Response("Hello, World!",{status:200,headers:{'Content-Type':'text/html'}});
//}



function Threejs() {

  useEffect(()=>{
    Init()
  },[])

  function Init(){
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
  
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );

    //document.body.appendChild( renderer.domElement );

    const geometry = new THREE.BoxGeometry( 1, 1, 1 );
    const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    const cube = new THREE.Mesh( geometry, material );
    scene.add( cube );

    camera.position.z = 5;

    function animate() {
      requestAnimationFrame( animate );
      renderer.render( scene, camera );

      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      renderer.render( scene, camera );
    }
    animate();

    const idtag = document.getElementById("threejs")
    idtag.appendChild( renderer.domElement );
    console.log("init threejs")
  }

  return (<div id="threejs" class={""} style="position:fixed;width:100%;height:100%;">
    
  </div>)
}
// <PageButton/>  
// Hello
export default Threejs;