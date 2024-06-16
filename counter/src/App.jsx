import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //Hooks
  let [counter, setCounter] = useState(15)

  // change is propogated through useState
  // useState returns 2 values in array format
  // variable and method in function format
  // method relating to the variable

  // let counter = 15;

  const addValue = () => {
    counter = counter + 1;

    // counter = counter + 1;
    // counter = counter + 1;
    // counter = counter + 1;
    // counter = counter + 1;
    // if multiple times statement included then too the increment is done once
    // reason being updates in UI is done in batches
    // so either only recent one executed or race condition

    // to avoid this
    setCounter((prevCounter) => prevCounter + 1)
    setCounter((prevCounter) => prevCounter + 1)
    setCounter((prevCounter) => prevCounter + 1)
    setCounter((prevCounter) => prevCounter + 1)
    // takes previous value of counter as parameter
    // could be named anything but better practice to keep it this way
    // callback (only propagates after previous one done)
    // not bunch of packages anymore

    // console.log(counter);
    setCounter(counter);
  }

  const subtractValue = () => {
    counter = counter - 1;
    // console.log(counter);
    setCounter(counter);
  }

  return (
    <>
      <h1>Counter Project</h1>
      <h2>Counter Value: {counter}</h2>

      <button
      onClick={addValue}
      >Add Value</button>
      <br />
      <button
      onClick={subtractValue}
      >Subtract Value</button>
    </>
  )
}

export default App
