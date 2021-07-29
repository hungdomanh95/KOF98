import React, { Component,Fragment } from 'react';
import {connect} from "react-redux";
import {renderAdminFighter,handleParamNoti,handleParamForm} from "../../../redux/action/characterAction";
import FormAdmin from "./FormAdmin";
import Notification from "../Notification/Notification";
import Loading from "../../Loading/Loading";
class AdminFighter extends Component {
    componentDidMount=()=>{
        if(this.props.isRenderAdFighter)
        document.body.style.overflowY="hidden"
    }
    handleButtonDelete=(param)=>{
        let paramNoti={
            isRenderNoti:true,
            type:"DELETE_CHARACTER",
            data:param
        }
        this.props.handleParamCharacter(paramNoti)
    }
    handleButtonShowForm=(param)=>{
        let paramForm={
            isRenderForm:true,
            data:param
        }
        this.props.handleCharacterForm(paramForm)
    }
    handleButtonCancel=()=>{
        this.props.offAdminFighter()
    }
    render() {
        return (
            <Fragment>
            <div className="adminFighter">
                {/* <div className="adminMask"></div> */}
                <div className="adminContent">
                    <div className="adminHeader">
                        <h1>CHARACTERS LIST</h1>
                    </div>
                    <div className="adminBody">
                        <table action="">
                            <thead>
                                <tr>
                                    <th>STT</th>
                                    <th>Name</th>
                                    <th>Team</th>
                                    <th>Images</th>
                                </tr>
                            </thead>
                            
                            <tbody>
                            {this.props.newListCharacter.map((item,index)=>
                                <tr key={index}>
                                    <td>{index}</td>
                                    <td>{item.name}</td>
                                    <td>{item.team}</td>
                                    <td><img src={item.images} alt=""/></td>
                                    <td>
                                        <button 
                                            className="btn btn-success" 
                                            onClick={()=>{this.handleButtonShowForm({item,type:"EDIT"})}}
                                        >
                                            EDIT
                                        </button>
                                    </td>
                                    <td>
                                        <button 
                                            className="btn btn-danger" 
                                            onClick={()=>{this.handleButtonDelete(item.id)}}
                                        >
                                            DELETE
                                        </button>
                                    </td>
                                </tr>
                            )}
                            </tbody>
                        </table>
                    </div>
                    <div className="adminFooter">
                        <button 
                            className="btn btn-success" 
                            onClick={()=>{this.handleButtonShowForm({type:"ADD"})}}
                        >
                            ADD
                        </button>
                        <button 
                            className="btn btn-primary" 
                            onClick={this.handleButtonCancel}
                        >
                            CANCEL
                        </button>
                    </div>
                </div>
            </div>
            {this.props.isRenderFormAdmin && <FormAdmin />}
            {this.props.isRenderNoti && <Notification/>}
            {this.props.isLoading && <Loading/>}
        </Fragment>
        )
    }
}
const mapStateToProps=(state)=>{
    return{
        newListCharacter:state.characterReducer.newListCharacter,
        isRenderAdFighter:state.characterReducer.isRenderAdFighter,
        isRenderFormAdmin:state.characterReducer.isRenderFormAdmin,
        isRenderNoti:state.characterReducer.isRenderNoti,
        isLoading:state.characterReducer.isLoading,
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        offAdminFighter:()=>{
            dispatch(renderAdminFighter())
        },
        handleParamCharacter:(param)=>{
            dispatch(handleParamNoti(param))
        },
        handleCharacterForm:(param)=>{
            dispatch(handleParamForm(param))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(AdminFighter)
