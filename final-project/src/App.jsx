import { useState } from 'react'
import KontakPage from'./pages/Kontak/KontakPage'
import Header from './components/Header'
import Footer from './components/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    
    <>
      <Header/>
      <KontakPage/>
      <Footer/>
      
    </> 
  )
}

export default App
