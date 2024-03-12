import React, { useState } from 'react'

const Counter = () => {
   const [counter, setCounter] = useState(0);

function handleClick(){
       setCounter(counter+1);
    }

function handleClick2(){
        setCounter(counter-1);
    }

    return(
        <>
        <h1>{counter}</h1>
        <button onClick={handleClick}>Add</button>
        <button onClick={handleClick2}>Dec</button>
        </>
    )



    }

export default Counter

