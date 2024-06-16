import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

function MyApp(){
  return(
    <div>
      <h1>Custom App !</h1>
    </div>
  )
}

// const ReactElement = {
//   type: 'a',
//   props: {
//       href: 'https://google.com',
//       target: '_blank'
//   },
//   children: 'Click me to visit google'
// };

const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit Google</a>
)

const someText = 'Hey there'

const ReactElement = React.createElement(
  'a', // tag of element
  {href: 'https://google.com', target: '_blank'}, // object with attributes and their values
  'click me to visit google', // content of element or children or Text
  someText // this will render variable value or evaluated expressions
)
// made using actual structure needed to make

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  //   <MyApp />
  // </React.StrictMode>,

  // ReactElement, // won't work

  // anotherElement,
  // it stores normal html code which will be converted into object and tree later by render function

  // can't use <ReactElement /> since already parsed version and expecting unparsed version
  // object can't be used as < .../> or ...()
  // still can't use ReactElement on it's own since the render function of React is inbuilt and expects some standard parameters and object structure
  // We used custom render to render element before

  // ReactElement,

  <App />
)
// equivalent to index.js in normal mode
// babel injects