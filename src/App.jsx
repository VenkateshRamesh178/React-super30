import React, {useState, useEffect} from 'react'
import "./index.css"
import Navbar from './Components/Navbar/Navbar'

const App = () => {

  const currentTheme = localStorage.getItem('currentTheme')
  const [Theme, setTheme] = useState(currentTheme?currentTheme:'light')

  useEffect(() => {
    localStorage.setItem('currentTheme', Theme)
  }, [Theme])
  

  return (
    <div className={`container ${Theme}`}>
      <Navbar Theme={Theme} setTheme={setTheme}/>
    </div>
  )
}

export default App