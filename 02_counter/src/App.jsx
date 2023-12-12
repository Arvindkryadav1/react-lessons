import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0)
  // let counter = 0;

  const addValue = ()=>{
    console.log("clicked", counter);
    // counter = counter +1
    setCounter(counter+1)
  }

  const decreaseValue = ()=>{
    console.log("clicked", counter);
  //  counter = counter -1
    setCounter(counter-1)
  }

  const reset = ()=>{
    console.log(counter);
    // counter = 0
    setCounter(0)
  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Increase Value</button>
      <br />
      <button onClick={reset}>Reset</button>
      <br />
      <button onClick={decreaseValue}>Decrease Value</button>
    </>
  )
}

export default App
