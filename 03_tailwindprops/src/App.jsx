import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from '../components/card'
function App() {
  const [count, setCount] = useState(0)

  let myObj = {
    username : "hitesh",
    age: 23}

  return (
    <>
     <h1 className='bg-green-400 text-black p-4 rounded-3xl mb-4' >Tailwind Test</h1> 
     <Card username = "chai aur code"  btnText = "click me"/>
     
     <Card username="Arvind" btnText = "click Me"/>
    </>
  )
}

export default App