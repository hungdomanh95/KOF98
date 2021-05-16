import React, { Component } from 'react';
import ShowTeam from "./ShowTeam";
import {connect} from "react-redux";
import {renderAdminFighter} from "../../../redux/action/characterAction";
 class ShowFighter extends Component {
     showAdminFighter = ()=>{
         this.props.handleAdminFighter()
     }
    render() {
        return (
            <div className="showFighter">
                <button className="btn btn-danger" 
                        onClick={this.showAdminFighter}
                >
                    Admin
                </button>
                <div className="show__List">
                    {this.props.listCharacter.length > 0 && this.props.team.map((item, index) => {
                        return (
                                <ShowTeam 
                                    key={index}
                                    team={item.team}
                                    listCharacter={this.props.listCharacter}
                                    handleCharacter={this.props.handleCharacter}/>
                    )})}
                </div>
            </div>
        )
    }
}
const mapDispacthToProps=(dispatch)=>{
    return{
        handleAdminFighter:()=>{
            dispatch(renderAdminFighter())
        }
    }
}
export default connect(null,mapDispacthToProps)(ShowFighter) 
