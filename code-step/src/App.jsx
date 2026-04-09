
import { useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState('')
  const [tnc, setTnc] = useState(false);
  const [interest, setInterest] = useState('');

  function getFormData(e) {
    console.log(name, tnc, interest)
    e.preventDefault()
  }

  return (
    <>
      <div className='text-center'>
        <h1>Handle form in react</h1>
        <form onSubmit={getFormData}>
          <input type="text" placeholder='enter name' onChange={(e) => setName(e.target.value)} /> <br /><br />
          <select onChange={(e) => setInterest(e.target.value)}>
            <option>Select Options</option>
            <option>Marvel</option>
            <option>DC out</option>
            <option>Marvel foot</option>
          </select>
          <br /><br />
          <input type='checkbox' onChange={(e) => setTnc(e.target.checked)} />
          <span>Accepts terms and conditions</span>
          <br /><br />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>

  )
}

export default App
