import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
   const [color, setColor] = useState('olive')
  return (
    <div className='w-full h-screen duration-200'
    style={{backgroundColor: color }}
    >
    <div className='fixed flex flex-wrap justify-center bottom-48 inset-x-0 px-2'>
     <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded-full px-3 py-2'>
      <button
       onClick={()=>setColor("red")}
       className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
       style={{backgroundColor: "red"}}
      >Red</button>

      <button
       onClick={()=>setColor("green")}
       className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
       style={{backgroundColor: "green"}}
      >Green</button>

      <button
       onClick={()=>setColor("white")}
       className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
       style={{backgroundColor: "white"}}
      >White</button>

      <button
       onClick={()=>setColor("olive")}
       className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
       style={{backgroundColor: "olive"}}
      >Olive</button>

      <button
       onClick={()=>setColor("orange")}
       className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
       style={{backgroundColor: "orange"}}
      >Orange</button>

      <button
       onClick={()=>setColor("purple")}
       className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
       style={{backgroundColor: "purple"}}
      >Purple</button>

      <button
       onClick={()=>setColor("beige")}
       className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
       style={{backgroundColor: "beige"}}
      >Beige</button>

      <button
       onClick={()=>setColor("coral")}
       className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
       style={{backgroundColor: "coral"}}
      >Coral</button>

      <button
       onClick={()=>setColor("ivory")}
       className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
       style={{backgroundColor: "ivory"}}
      >Ivory</button>

      <button
       onClick={()=>setColor("brown")}
       className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
       style={{backgroundColor: "brown"}}
      >Brown</button>

      <button
       onClick={()=>setColor("lavender")}
       className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
       style={{backgroundColor: "lavender"}}
      >Lavender</button>

     </div>
    </div>

    </div>
  )
}

export default App
