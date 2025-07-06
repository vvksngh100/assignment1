import React, { useState } from 'react';
import './FunctionalCounter.css'

export default function FunctionalCounter(props){
    const [count, setCount] = useState(0);

    const handleDecrement = () => {
        if(count > 0){
            setCount(prevCount => prevCount - 1);
        }
    }

    const handleIncrement = () => {
        setCount(prevCount => prevCount + 1);
    }

    return (
        <>
        {props.children}
        <div className='counter'>
            <button onClick={handleDecrement} disabled={count === 0}>-</button>
            <p>{count}</p>
            <button onClick={handleIncrement}>+</button>
        </div>
        </>
    )
}