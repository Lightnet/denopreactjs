/*
  Project Name: Deno Preactjs
  License: MIT
  Created By: Lightnet
*/
// https://preactjs.com/guide/v10/switching-to-preact/#suspense-experimental
/** @jsxRuntime classic */
/** @jsx h */
import { h } from "preact"
//import { useState } from 'preact/hooks';
//import { Suspense, lazy } from "preact/compat";

export default function SomeComponent() {

  return (<div>
    <label>Hello World! Load!</label>
  </div>)
}