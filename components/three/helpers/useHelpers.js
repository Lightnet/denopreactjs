


import { h, Fragment, createRef, options  } from "preact"
import {useState, useEffect, useContext} from "preact/hooks"

// https://www.codedaily.io/tutorials/Creating-a-Reusable-Window-Event-Listener-Hook-with-useEffect-and-useCallback

export const useWindowEvent = (event, callback) => {
  useEffect(() => {
    window.addEventListener(event, callback);
    return () => window.removeEventListener(event, callback);
  }, [event, callback]);
};

export const useGlobalMouseUp = (callback) => {
  return useWindowEvent("mouseup", callback);
};

export const useGlobalMouseMove = (callback) => {
  return useWindowEvent("mousemove", callback);
};

/*
export default function CoolComponent() {
  const callback = useCallback((e) => {
    console.log(e);
  }, []);

  useGlobalMouseMove(callback);
  return <div>Other code here</div>;
}

*/
