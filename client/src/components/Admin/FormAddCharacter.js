import React, { Component } from 'react'
import Admin from '../Admin/Admin'
import {connect} from 'react-redux'
import {getAddCharacter,onOffModal} from '../../redux/action/characterAction'
import {ModalFormAddCharacter} from '../Modal/ModalFormAddCharacter'

class FormAddCharacter extends Component {
    state = {
        data:{},
        value:"",
        modalStatus: false,
        statusModal: false,
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

    modalAddCharacter = () => {
        this.setState({
            statusModal: !this.state.statusModal
        })
    }
    
    render() {
        console.log('Listcharacter: ', this.props.Listcharacter.length);
        // console.log('this.state.value: ', this.state.value);
        // console.log("this.props.sucessAddCharacter",this.props.sucessAddCharacter)
    return (
            <div className="formCharacter">
                <form action="">
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
                        <div className="buttonEdit">
                <div onClick={this.addCharacter} className="btn btn-success">ADD</div>
                {this.state.statusModal && <ModalFormAddCharacter/>}
                <div onClick={this.modalAddCharacter} className="btn btn-danger">RESET FORM</div>
                </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        sucessAddCharacter: state.characterReducer.sucessAddCharacter,
        Listcharacter: state.characterReducer.listcharacter,    
        statusModal: state.characterReducer.statusModal,    
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addCharacter : (value) => {
            dispatch(getAddCharacter(value))
        },
        // offShowModal: () => {
        //     dispatch(onOffModal());
        // }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(FormAddCharacter)