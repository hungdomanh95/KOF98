import React, { Component } from 'react'

export default class ShowTeam extends Component {
    render() {
        const newList = this.props.listCharacter.filter((item) => {
            return this.props.team === item.team
        })
        return (
            <div>
                <h3>{this.props.team}</h3>
                    <div className="list__content">
                        {newList && newList.map((item, index) => {
                            return (
                                <div className="list__detail">
                                    <img src={item.images} alt="" />
                                    <p>{item.name}</p>
                                </div>
                            )
                        })}
                    </div>
            </div>
        )
    }
}
