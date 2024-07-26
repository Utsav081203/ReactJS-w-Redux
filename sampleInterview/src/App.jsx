import { useEffect, useState } from 'react';
import './App.css'

function App() {
  // const [value, setValue] = useState(1);
  // // const[multipliedValue, setMultipliedValue] = useState(1);
  // let multipliedValue = Math.pow(5, value-1);

  // const multipliedbyfive = () => {
  //   // setMultipliedValue(value*5);
  //   setValue(value+1);
  // }

  // // useEffect(() => {
  // //   // same logic
  // // }, [value]);

  // // whenever state or prop changes, the components re-renders
  // // useState is used for syncing
  // // when state changed, component (here in this case the App) is remount
  // // line by line the component is re compiled and executed types.
  // // thus dividing the app into individual components is very essential to avoid remounting of entire app again but only of that small component where the state affects
  // // whole component remounts.
  // // App is re rendered/re run
  // // thus only using one state, we can achieve it too.

  console.log("App rendered", Math.random());

  // const [value, setValue] = useState(1);

  const [value, setValue] = useState({
    value: 0,
  });


  const clickMe = () => {
    // console.log("logged"); //app doesn't re render
    // setValue(value+1); //app re renders
    // setValue(1); // if value doesn't change then the app won't re render
    // only when value changes after set then it will re render

    setValue({
      value: 0,
    });
    // but here it re renders
    // primitive and non primitive datatypes
    // pass by value, pass by reference
    // primitive types: string, boolean, etc. They are passed with value.
    // in non primitive, every time it is passed it is with a reference, thus kind off new value passed.
    // thus we are able to assign to const arrays and objects
    // thus when arrays and objects set then it will re render.

    // point to be noted:
    // thus whenever we use array or object as dependency in useEffect, everytime it is bound to reload
    // hence performance compromised
    // better to have dependency with a particular key in the object.
  }

  return (
    <>
      {/* <h1>Main Value: {value}</h1>
      <button
      onClick={multipliedbyfive}
      >Click to Multiply by 5</button>
      <h2>Multiplied Value: {multipliedValue}</h2> */}
      <h1>Value: {value.value}</h1>
      <button
      onClick={clickMe}
      >Click Me!</button>
    </>
  )
}

export default App