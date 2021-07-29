import React, { Component } from 'react';
import { Fragment } from 'react';
import { connect } from "react-redux";
import { handleParamForm, handleParamNoti } from "../../../redux/action/characterAction";
class FormAdmin extends Component {
    state = {
        paramCharacter: {},
        inforCharacter: {},
        newCharacter: {
            name: "",
            team: "",
            images: "",
        }
    }
    componentDidMount = () => {
        if (this.props.paramForm)
            this.setState({
                paramCharacter: this.props.paramForm,
                inforCharacter: this.props.paramForm.item
            })
    }
    handleButtonAdd = (param) => {
        let paramNoti = {
            type: "ADD_CHARACTER",
            data: param,
            isRenderNoti: true
        }
        this.props.handleParamCharacter(paramNoti)
    }
    handleButtonEdit = (param) => {
        let paramNoti = {
            type: "EDIT_CHARACTER",
            data: param,
            isRenderNoti: true
        }
        this.props.handleParamCharacter(paramNoti)
    }
    handleButtonCancel = () => {
        let paramForm = {
            isRenderForm: false
        }
        this.props.offFormAdmin(paramForm)
    }
    handleOnChange = (e) => {
        const { type } = this.state.paramCharacter
        if (type === "EDIT") {
         this.setState({
                ...this.state.inforCharacter[e.target.name] = e.target.value})
        }
        else {
            this.setState({
                ...this.state.newCharacter[e.target.name] = e.target.value,
                ...this.state.newCharacter.id = this.props.characterItems.length + 10
            })
        }
    }
    formFooter = () => {
        const { type } = this.state.paramCharacter;
        return (
            <Fragment>
                {type === "ADD" &&
                    <button
                        className="btn btn-success"
                        onClick={() => { this.handleButtonAdd(this.state.newCharacter) }}
                    >
                        ADD
                    </button>
                }
                {type === "EDIT" && 
                    <button 
                        className="btn btn-success" 
                        onClick={() => { this.handleButtonEdit(this.state.inforCharacter) }}
                    >
                        EDIT
                    </button>}
                <button 
                    className="btn btn-primary" 
                    onClick={this.handleButtonCancel}
                >
                    CANCEL
                </button>
            </Fragment>
        )
    }
    render() {
        const { type } = this.state.paramCharacter;
        return (
            <div className="formAdmin">
                <div className="formContent">
                    <div className="formHeader"></div>
                    <div className="formBody">
                        <div className="bodyTitle">
                            {type==="ADD" && <h3>ADD CHARACTER</h3>}
                            {type==="EDIT" && <h3>EDTI CHARACTER</h3>}
                        </div>
                        <form>
                            <label>
                                Name:
                                <input
                                    type="text"
                                    name="name"
                                    value={
                                        type === "EDIT" 
                                        ? 
                                        this.state.inforCharacter.name 
                                        : 
                                        this.state.newCharacter.name
                                    }
                                    onChange={this.handleOnChange}
                                />
                            </label>
                            <br />
                            <label>
                                Team:
                                <input 
                                    type="text"
                                    name="team"
                                    value={
                                        type === "EDIT" 
                                        ?
                                        this.state.inforCharacter.team 
                                        : 
                                        this.state.newCharacter.team
                                    }
                                    onChange={this.handleOnChange} />
                            </label>
                            <br />
                            <label>
                                Nhân vật:
                                <input 
                                    type="text"
                                    name="images"
                                    value={
                                        type === "EDIT" 
                                        ? 
                                        this.state.inforCharacter.images 
                                        : 
                                        this.state.newCharacter.images
                                    }
                                    onChange={this.handleOnChange} />
                            </label>
                        </form>
                    </div>
                    <div className="formFooter">
                        {this.formFooter()}
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        paramForm: state.characterReducer.paramForm.data,
        characterItems: state.characterReducer.characterItems
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        offFormAdmin: (param) => {
            dispatch(handleParamForm(param))
        },
        handleParamCharacter: (param) => {
            dispatch(handleParamNoti(param))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(FormAdmin)
