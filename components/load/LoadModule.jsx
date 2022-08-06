/*
  Project Name: Deno Preactjs
  License: MIT
  Created By: Lightnet
*/

/** @jsxRuntime classic */
/** @jsx h */
import { h } from "preact"
import { useState } from 'preact/hooks';
import { Suspense, lazy } from "preact/compat";

export default function LoadModule() {
  
  const SomeComponent = lazy(() => import('./SomeComponent.jsx'));

  return (<div>
    <Suspense fallback={<div>loading...</div>}>
      <SomeComponent />
    </Suspense>
  </div>)
}