import React, {useRef} from 'react'
import "./App.css"

function UseRefHook() {
    let inputRef = useRef(null)

    function handleInput() {
        console.log("function call");
        // inputRef.current.value="100"
        // inputRef.current.focuse();
        // inputRef.current.style.color="red"  
        inputRef.current.style.display="none" 
    }

    return (
        <div className='App'>
            <h1>UseRef in react</h1>
            <input type="text" ref={inputRef} />
            <button onClick={handleInput}>Handle Input</button>
        </div>
    )
}

export default UseRefHook
