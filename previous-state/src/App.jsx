import React, { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(1)

  function updateCounter() {
    //  simple type check previous data check

    // let rand = Math.floor(Math.random() * 10)
    // setCount((pre) => {
    //   console.log(pre)    //  is code sai previous data check kr saktai hai
    //   if (pre < 5) {      
    //     alert('low value')
    //   }
    //   return rand
    // })

    // thoda acha tarika data update krnai ka

    for (let i = 0; i < 5; i++) {
      setCount((pre) => pre + 1)
    }
  }

  return (
    <>
      <div className='App'>
        <h1>{count}</h1>
        <button onClick={updateCounter}>Click me to update counter</button>
      </div>
    </>
  )
}

export default App
