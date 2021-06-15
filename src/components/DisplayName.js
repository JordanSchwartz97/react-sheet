import React from 'react'

function DisplayName(props) {
    return (
        <div>
            <h1>Welcome, {props.firstName} {props.lastName}!</h1>
        </div>
    )
}

export default DisplayName



