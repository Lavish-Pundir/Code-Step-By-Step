import React,{useRef} from 'react'
import ForwordUser from './ForwordUser'
import "./App.css"


function ForwordRef() {
    let inputRef= useRef();
    function updateInput () {
    //  inputRef.current.value="1000"
    //  inputRef.current.style.color="red"
     inputRef.current.focuse()
    }

    return (
        <div className='App'>
           <h1>Forword ref in react</h1>
           <ForwordUser ref={inputRef} />
           <button onClick={updateInput}>Update InputBox</button>
        </div>
    )
}

export default ForwordRef
