import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {jsx as _jsx} from "react/jsx-runtime.js"
import './App.css'
import Demo from "./demo"

// other components can be used in a component too
// Like here
// in .jsx you can only return only one element
// solution: use <div>.many elements to return.</div>
// or <>..</> fragments

function App() {
  const username = "demo name";
  return (
    <>
    <Demo/> 
    <h1>Hello {username}</h1>
    {/* to render variables not actual javascript*/}
    {/* javascript output can be used here */}
      
    <p>Hey there</p>
    </>
  )
}

export default App
