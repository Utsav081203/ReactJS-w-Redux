import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Layout from './components/Layout/Layout.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import GitHub, { githubInfoLoader } from './components/GitHub/GitHub.jsx'

// making a router, method 1
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />
//       },
//       {
//         path: "about",
//         element: <About />
//       },
//       {
//         path: "contact",
//         element: <Contact />
//       }
//     ]
//   }
// ])
// array has all the objects we need
// when path then element and when branching/nesting then their children as per url respectively


// making a router, method 2
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='user/:userid' element={<User />} />
      {/* we get to access this paramater (the one after colon) */}
      <Route
      // we can write api call right here
      loader={githubInfoLoader}
      //  path='github/:githubid' element={<GitHub />} />
      path='github' element={<GitHub />}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* takes a prop (router) */}
    {/* no need to render App at all */}
    {/* instead use router-dom */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
