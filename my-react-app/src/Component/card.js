import React from 'react'


const Card = (props) => {
    return (
        <div>
            <h2>{props.names}</h2>
            <img src={props.img} alt="" width={200}/>
            <p>phone no: {props.contact}</p>
            <p>{props.url}</p>

        </div>
    )    
}


export default Card;