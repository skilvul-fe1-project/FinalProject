import { useState } from 'react'
import Header from './components/Header'
import DonasiPage from './pages/Donasi/DonasiPage'
import style from './pages/Donasi/style.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <>
      <Header/>
      <DonasiPage/>
      
    </> 
  )
}

export default App
