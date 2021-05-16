import React, { Component } from 'react';
import {connect} from "react-redux";
import {getCharacter,handleParamNoti,addCharacter,deleteCharacter,editCharacter} from "../../../redux/action/characterAction"
class Notification extends Component {
    componentDidMount=()=>{
        const {isAddSuccess,isDeleteSuccess,isEditSuccess} = this.props
        if(isAddSuccess || isDeleteSuccess || isEditSuccess)
        this.props.getListCharacter()
    }
    handleButtonCancel=()=>{
        let paramNoti={
            isRenderNoti:false
        }
        this.props.offNotification(paramNoti)
    }
    handleButtonConfirm=()=>{
        const{type,data} = this.props.paramNoti
        if(type==="ADD_CHARACTER"){
            this.props.handleAddCharacter(data)
        }
        else if(type==="EDIT_CHARACTER"){
            this.props.handleEditCharacter(data.id,data)
        }else if(type==="DELETE_CHARACTER"){
            this.props.handleDeleteCharacter(data)
        }
    }
    render() {
        const{type}=this.props.paramNoti;
        const{isAddSuccess,isDeleteSuccess,isEditSuccess} =  this.props;
        return (
            <div className="notification">
                <div className="mask"></div>
                <div className="notiContent">
                    <div className="notiHeader"></div>
                    <div className="notiBody">
                        {type==="DELETE_CHARACTER" &&
                            !isDeleteSuccess &&
                            <h3>DO YOU WANT DELETE CHARACTER</h3>
                        }
                        {
                            type==="ADD_CHARACTER" && 
                            !isAddSuccess && 
                            <h3>DO YOU WANT ADD CHARACTER</h3>
                        }
                        {
                            type==="EDIT_CHARACTER" && 
                            !isEditSuccess &&
                            <h3>DO YOU WANT EDIT CHARACTER INFOR</h3>
                        }
                        {isAddSuccess && <h3>ADD COMPLETE</h3>}
                        {isDeleteSuccess && <h3>DELETE COMPLETE</h3>}
                        {isEditSuccess && <h3>EDIT COMPLETE</h3>}
                    </div>
                    <div className="notiFooter">
                        {(!isAddSuccess && !isDeleteSuccess && !isEditSuccess) &&
                            <button 
                                className="btn btn-success" 
                                onClick={this.handleButtonConfirm}
                            >
                                Confirm
                            </button>}
                        <button 
                            className="btn btn-primary" 
                            onClick={this.handleButtonCancel}
                            >
                                {(isAddSuccess || isDeleteSuccess || isEditSuccess) ? "OK" : "Cancel"}
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return{
        paramNoti:state.characterReducer.paramCharacter,
        isAddSuccess:state.characterReducer.isAddSuccess,
        isDeleteSuccess:state.characterReducer.isDeleteSuccess,
        isEditSuccess:state.characterReducer.isEditSuccess
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        offNotification:(data)=>{
            dispatch(handleParamNoti(data))
        },
        handleAddCharacter:(data)=>{
            dispatch(addCharacter(data))
        },
        handleEditCharacter:(id,data)=>{
            dispatch(editCharacter(id,data))
        },
        handleDeleteCharacter:(id)=>{
            dispatch(deleteCharacter(id))
        },
        getListCharacter:()=>{
            dispatch(getCharacter())
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Notification)
