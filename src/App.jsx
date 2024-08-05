import React, {useState, useEffect} from 'react'
import "./index.css"
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'

const App = () => {

  const currentTheme = localStorage.getItem('currentTheme')
  const [Theme, setTheme] = useState(currentTheme?currentTheme:'light')

  useEffect(() => {
    localStorage.setItem('currentTheme', Theme)
  }, [Theme])
  

  return (
    <div className={`container ${Theme}`}>
      <Navbar Theme={Theme} setTheme={setTheme}/>
      <Footer/>
    </div>
  )
}

export default App