import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  let myObj={
    username: "Utsav",
    age: 20
  }
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind Test</h1>
      {/* <figure class="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
      <img class="w-24 h-24 rounded-full mx-auto" src="https://images.pexels.com/photos/1564839/pexels-photo-1564839.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" width="384" height="512" />
      <div class="pt-6 space-y-4">
        <blockquote>
          <p class="text-lg font-medium">
            “Tailwind CSS is the only framework that I've seen scale
            on large teams. It’s easy to customize, adapts to any design,
            and the build size is tiny.”
          </p>
        </blockquote>
        <figcaption class="font-medium">
          <div class="text-sky-500 dark:text">
            Sarah Dayan
          </div>
          <div>
            Staff Engineer, Algolia
          </div>
        </figcaption>
      </div>
    </figure> */}
    {/* passing props */}
    <Card username='Utsav' someObje={myObj}/>
    {/* show here with information we need in component */}
    <Card username='StarBoy'/>
    </>
  )
}

export default App
