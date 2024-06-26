import { useState } from 'react'

import './App.css'
import Theme from './Pages/Theme'
import Home from './Pages/Home'

function App() {

  // state and props

  // what are state in react ? variable store data number, boolean, string, array, object , etc. // mutable // mutable

  // what are props => props are used to used to transfer data form parent component to child component // immutable

  return (
    <>
      <Home />
      <Theme />

    </>
  )
}

export default App
