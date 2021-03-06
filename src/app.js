import DisplayName from "./components/DisplayName";
import React,{ Component } from "react";
import NamesList from "./components/NamesList";
import AlertUser from "./components/AlertUser";
import SuperheroTable from "./components/SuperheroTable";

class App extends Component {
    constructor(props){
    super(props);
    this.state = {
        firstName: 'Reggie',
        lastName: 'White',
        names: ['Mike', 'Nevin', 'Aaron', 'Tory', 'Kellie'],
        superheroes: [
            {
                superheroId: 1, 
                name: 'Batman', 
                primaryAbility: 'Wealthy',
                secondaryAbility: 'Rich'
            },
            {
                superheroId: 2, 
                name: 'Superman',
                primaryAbility: 'Super strength',
                secondaryAbility: 'Fly'
            },
            {
                superheroId: 3,
                name: 'Spiderman',
                primaryAbility: 'Spider senses',
                secondaryAbility: 'Shoots web'
            }
        ]
    }
}
    render() {
    return (
        <div>
        <DisplayName firstName={this.state.firstName} lastName={this.state.lastName} />
        <NamesList names={this.state.names}/>
        <SuperheroTable superheroes={this.state.superheroes}/>
        <button onClick={AlertUser}>Click Me!</button>
        </div>
    );
    }
    }
    

export default App;