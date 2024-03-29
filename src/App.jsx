import { useEffect } from "react"
import AOS from 'aos'
import Navbar from "./components/Navbar"
import Home from "./Home"


function App() {
  useEffect(()=>{
    AOS.init({duration: 1000})
  }, [])

  return (
    <div className="app">
      <Navbar />
      <Home />
    </div>
  )
}

export default App
