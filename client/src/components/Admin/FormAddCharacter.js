import React, { Component } from 'react'
import Admin from '../Admin/Admin'
import {connect} from 'react-redux'
import {getAddCharacter,onOffRequest,onOffNoti} from '../../redux/action/characterAction'
import Notification from '../Modal/Notification'

class FormAddCharacter extends Component {
    state = {
        data:{},
        value:"",
        // modalStatus: false,
        // statusModal: false,
    }
    addCharacter = (e) => { 
        // e.preventDefault();        
        this.props.addCharacter(this.state.value)    
        // this.props.offShowModal()   
    }
    handleChange(e) {
        const name = e.target.name
        // console.log(event.target.value)
        this.setState({
            value:{
                ...this.state.value,
                [name]:e.target.value,
                id: this.props.Listcharacter.length                
            }
        })
    }
    showRequestModal = () => {
        // console.log("aaaaaaaaaaaa")
        this.props.RequestModal()
    }
    openNofitication = (data) => {
        var params = {
            type:"ADD_CHARACTER",
            // dòng 38 data cố định
            data:data
        }
        // this.props.onOffNotification({type:"ADD_CHARACTER",data:data})
        this.props.onOffNotification(params)
    }

    
    render() {
        // console.log("this.props.statusRequest",this.props.statusRequest)
        // console.log("this.props.statusNofitication",this.props.statusNofitication)
    return (
            <div className="formCharacter">
                <div className="modalFormCharacter">
                    <div className="form-group">
                        <label>Name Character: </label>
                        {/* truyền event vào hàm onChange */}
                        <input name="name" className="form-control" value={this.state.value.name} onChange={(e)=>this.handleChange(e)}></input>
                    </div>
                    <div className="form-group">
                        <label>Team Character: </label>
                        <input name="team" className="form-control" value={this.state.value.team} onChange={(e)=>this.handleChange(e)}></input>
                    </div>
                    <div className="form-group">
                        <label>Intro Character: </label>
                        <input name="intro" className="form-control" value={this.state.value.intro} onChange={(e)=>this.handleChange(e)}></input>
                    </div>
                    
                    <div className="buttonFormAdd">
                    <div onClick={()=>{this.openNofitication(this.state.value)}} className="btn btn-danger">ADD</div>
                    <div onClick={this.showRequestModal} className="btn btn-warning">CLOSE</div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        sucessAddCharacter: state.characterReducer.sucessAddCharacter,
        Listcharacter: state.characterReducer.listcharacter,    
        statusRequest: state.characterReducer.statusRequest,
        statusNofitication: state.characterReducer.statusNofitication,
        // statusModal: state.characterReducer.statusModal,  
        // statusModalForm: state.characterReducer.statusModalForm  
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        RequestModal: () => {
            dispatch(onOffRequest());
        },
        onOffNotification: (params) => {
            dispatch(onOffNoti(params));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(FormAddCharacter);