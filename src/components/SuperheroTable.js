import React from 'react'

function SuperheroTable(props) {
    return (
        <div>
            {props.superheroes.map((item) => {
                return(
            <table>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Primary Ability</th>
                    <th>Secondary Ability</th>
                </tr>
                <tr>
                    <td>{item.superheroId}:</td>
                    <td>{item.name},</td>
                    <td>{item.primaryAbility},</td>
                    <td>{item.secondaryAbility}.</td>
                </tr>
            </table>
            )})}
        </div>
        )
}

export default SuperheroTable
