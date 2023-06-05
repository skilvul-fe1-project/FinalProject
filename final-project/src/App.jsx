import { useState } from 'react'
import KontakPage from'./pages/Kontak/KontakPage'
import Header from './components/Header'


function App() {
  const [count, setCount] = useState(0)

  return (
    
    <>
      <Header/>
      <KontakPage/>
      
    </> 
  )
}

export default App
