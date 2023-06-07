import { useState } from 'react'
import Header from './components/Header'
import DonasiPage from './pages/Donasi/DonasiPage'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <>
      <Header/>
      <DonasiPage/>
      <Footer/>
      
    </> 
  )
}

export default App
