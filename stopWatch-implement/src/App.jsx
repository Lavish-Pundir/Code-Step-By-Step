import { useState } from 'react'
import './App.css'

var adjustInterval = undefined;
function App() {
  const [watch, setWatch] = useState(0)
  const [started, setStarted] = useState(false)

  const startWatch = () => {
    adjustInterval = setInterval(() => {
      setWatch((prev) => prev + 1)
    }, 1000)
    setStarted(true)

  }

  const stopWatch = () => {
    clearInterval(adjustInterval)
    setStarted(false)

  }

  const resetWatch = () => {
    setWatch(0)
    setStarted(false)
    clearInterval(adjustInterval)
  }

  return (
    <div className='App justify-center h-screen bg-gray-100 dark:bg-gray-900'>
      <h1>Start Stop Watch</h1>
      <br />
      <h1>{watch}</h1>
      <br />
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 m-2 px-4 rounded"
        disabled={started}
        onClick={startWatch}>Start</button>

      <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 m-2 px-4 rounded" onClick={stopWatch} >Stop</button>

      <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 m-2 px-4 rounded" onClick={resetWatch}>Reset</button>
    </div>
  )
}

export default App
