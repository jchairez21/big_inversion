import React from 'react'

const PersonCard = (props) => {
    return (
        <div>
            <div>
                <h1>{props.first_name}, {props.last_name}</h1>
                <p>Age: {props.age}</p>
                <p>Hair Color: {props.hair_color}</p>
            </div>
        </div>
    )
}

export default PersonCard




