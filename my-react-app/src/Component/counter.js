import React, { useState } from 'react';
import { CustomButton, NavLink } from './button';


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

            <CustomButton onClick={decrementValue}> Sign Up </CustomButton>
            <CustomButton onClick={increaseValue}> Sign In </CustomButton>

            <NavLink path="https://www.google.com">Home</NavLink>



            
        </div>
    )
}

export default Counter;