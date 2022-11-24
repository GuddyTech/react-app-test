import React, { useState } from 'react';


const Counter = () => {
        const [state, setState] = useState("Guddy");
        const [count, setCount] = useState(0);

        function changeName() {
            setState("Praise");
        }

        function increaseValue() {
            setCount(count + 1);
        }

        function decrementValue() {
            setCount(count - 1);
        }

    return (
        <div>
            <h1> Counter App</h1>
            <p>{state}</p>
            <button onClick={changeName}> Change Name</button>
            
            <h1>{count}</h1>
            <button onClick={decrementValue}>Decrement</button>

            <button onClick={increaseValue}>Increment</button>

            

            
        </div>
    )
}

export default Counter;