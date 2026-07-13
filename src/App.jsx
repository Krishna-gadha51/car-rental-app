import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import NavBar from './components/NavBar'
import Home from './components/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import View from './components/View'
import AddCar from './components/AddCar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <BrowserRouter>



        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddCar />} />
          <Route path="/view" element={<View />} />




        </Routes>

      </BrowserRouter>
      



    </>
  )
}

export default App
