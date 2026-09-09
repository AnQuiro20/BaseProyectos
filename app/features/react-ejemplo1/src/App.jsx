import { useState } from 'react'
import './App.css'
import { LayoutContador } from './features/contador/LayoutContador'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hello, React!</h1>
      <LayoutContador />
    </>
    
  )
}

export default App
