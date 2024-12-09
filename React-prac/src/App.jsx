import { useState } from 'react'
import AppCharacters from './components/AppCharacrets' 
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div>HI</div>
     <AppCharacters />
    </>
  )
}

export default App
