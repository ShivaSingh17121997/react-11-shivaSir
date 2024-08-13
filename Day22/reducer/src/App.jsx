import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UseReducer from './Pages/UseReducer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <UseReducer />
    </>
  )
}

export default App
