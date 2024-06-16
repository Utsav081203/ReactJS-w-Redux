import { useState } from "react"

function App() {
  const [color, setColor] = useState("olive")
  // starts with value in useState(___)
  return (
    <>
      {/* can give style like style ={{propertyname:propertyvalue,......}} */}
      {/* since double curlies used, we can access variables directly inside without anymore braces */}
      <div className="w-full h-screen duration-200"
      style={{backgroundColor: color}}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button
            // pass a callback function in which we are calling the original function
            onClick={() => setColor("red")}
            // onClick{setColor}
            // onClick expects us to pass a function
            // directly passing setColor means we pass a function reference
            // but we won't be able to pass parameter and even if we do like
            // onClick{setColor("red")}, it will execute function onspot
            // it will thus pass a value or who knows to onClick
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor: "red"}}
            >Red</button>
            <button
            onClick={() => setColor("green")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor: "green"}}
            >Green</button>
            <button
            onClick={() => setColor("blue")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor: "blue"}}
            >Blue</button>
            {/* basic tailwind used inside className */}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
