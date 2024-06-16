import { useState, useCallback, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setnumberAllowed] = useState(false);
  const [charAllowed, setcharAllowed] = useState(false);
  const [password, setPassword] = useState("Password");

  // on click of button, we need to refer to input box
  const passwordRef = useRef(null);


  const passwordGenerator = useCallback(() => {
    let pass = "";
    let valid = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if(numberAllowed)
    {
      valid+="0123456789";
    }
    if(charAllowed)
    {
      valid+=`!@#$%^&*()_+-={}[]|:;"'<>,.?/"`;
    }
    for(let i = 1; i<=length; i++)
    {
      let idx = Math.floor((Math.random() * valid.length) + 1);
      pass += valid.charAt(idx);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);
  // useCallback(function, dependencies)
  // if these dependencies are touched, then optimize the method using cache storing related to these dependencies
  // without useCallback too we can make this

  // we cant directly call passwordGenerator() to generate password upon reloading
  // to render password on box, we can attach button onclick to do it or
  // use useEffect hook

  const copyPasswordToClipboard = useCallback(() => {
    // window object exists
    window.navigator.clipboard.writeText(password);
    passwordRef.current?.select();
    // ? is for if current value exists
    // passwordRef.current?.setSelectionRange(0, 4);
    // to select a range
  }, [password]);
  // use cache to store in memory related to password which is needed in this case
  // memoization
  // extra optimization

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);
  // callback function, dependencies of which if updated or called, will happen
  // if these dependencies are touched, then re run
  return (
    <>
      <div className='w-full max-x-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800'>
        <h1 className='text-4xl text-center text-white my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text"
          value={password}
          className='outline-none w-full py-1 px-3'
          placeholder='password'
          readOnly
          ref={passwordRef}
          // its value will reflect/be referred in variable
          />
          <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
          onClick={copyPasswordToClipboard}
          >Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
            type="range"
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            // to enable cursor moving
            onChange={(e) => {setLength(e.target.value)}}
            // event is passed as parameter
            />
            <label>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox"
            defaultChecked={numberAllowed}
            id='numberInput'
            onChange={() => {
              setnumberAllowed((prev) => !prev);
              // callback firing
              // inside the term '(prev) => !prev' is a parameter
              // it will be finally a value
              // It will be flipped everytime before passing it as paramter
              // previous value will be available to access as parameter for callback firing function
              // this previous value will be flipped before sending it as parameter
            }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox"
            defaultChecked={charAllowed}
            id='characterInput'
            onChange={() => {
              setcharAllowed((prev) => !prev);
            }}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App