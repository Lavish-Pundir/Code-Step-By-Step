import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [val, setVal] = useState('0000')
  const [item, setItem] = useState('')

  return (
    <div className='App'>
      <h1>Controlled component</h1>
      <input type="text" value={val} onChange={(e) => setVal(e.target.value)} />
      {/* <input type="text" value={item} onChange={(e) => setItem(e.target.value)} /> */}
      <h3>value : {val}</h3>
      {/* <h3>value : {item}</h3> */}
    </div>
  )
}

export default App
