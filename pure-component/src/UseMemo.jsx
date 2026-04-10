import React, {useState, useMemo} from 'react'
import './App.css'


function UseMemo() {
    const[count, setCount] = useState(1);
    const[itom, setItom] = useState(10);

    // function multiCount() {
    //     console.log("multiCount")
    //     return count*5
    // }

    const multiCountMemo = useMemo(function multiCount() {
        console.log("multiCount")  
        return count * 5
    }, [count])         // only single function run hoga ye condition hai

    return (
        <div>
        <h1>useMemo Hook in react</h1>
        <h2>{count}</h2>
        <h2>{itom}</h2>
        {/* <h2>{multiCount()}</h2> */}
        <h2>{multiCountMemo}</h2>
        <button onClick={() => setCount(count+1)}>Update count</button>
        <button onClick={() => setItom(itom*10)}>Update itom</button>

        </div>
    )
}

export default UseMemo
