import React, { Component } from 'react'
import ShowTeam from "./ShowTeam"
export default class ShowFighter extends Component {
    render() {
        return (
            <div className="showFighter">
                <div className="show__List">
                    {this.props.listCharacter.length > 0 && this.props.team.map((item, index) => {
                        return (
                                <ShowTeam 
                                    team={item.team}
                                    listCharacter={this.props.listCharacter}
                                    handleCharacter={this.props.handleCharacter}/>
                    )})}
                </div>
            </div>
        )
    }
}
