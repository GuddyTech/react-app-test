import React from 'react'

function Button() {
    return (
            <button> Search </button>
    )
}

//trying to add a custom button
export default Button

export function CustomButton({onClick, children}) {
    return (
        <button onClick={onClick}>{children}</button>
    );
}
