import React from 'react'

function NamesList(props) {
    return (
        <div>
            {props.names.map((x,i) => <option key={i}>{x}</option>)}
        </div>
    )
}

export default NamesList
