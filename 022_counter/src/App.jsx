import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0)
    
  const addvalue = ()=>{
    setCounter(counter+1)
  }
  const decreaseValue = ()=>{
    setCounter(counter-1)
  }
  const reset = ()=>{
    setCounter(0)
  }

  return (
    <>
      <h1>Counter Practice Project</h1>
      <h2>Counter Value : {counter}</h2>
      <button onClick={addvalue}>Increase</button>
      <button onClick= {reset}>Reset</button>
      <button onClick={decreaseValue}>Decrease</button>
    </>
  )
}

export default App
