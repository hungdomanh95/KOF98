import React, { Component } from 'react'

export default class Modal extends Component {
    state={
        statusInput:false,
        value:this.props.itemCharacter
    }
    handleShowInput=()=>{
        this.setState({
            statusInput:!this.state.statusInput
        })
    }
    handleChangeInput=(e)=>{
        this.setState({
            value:{
                ...this.state.value,
                name:e.target.value
            }
        })
    }
    render() {
        console.log('this.props.selectCharacter: ', this.props.selectCharacter);

        return (
            <div className="Modal">
              <div className="showModal">
                <div className="showModalName">
                    {!this.state.statusInput ? 
                        <p>Name Character: {this.state.name}</p> 
                    : 
                        <div> Name Character: <input name = "name" value = {this.state.name} onChange={this.handleChangeInput} /></div>
                    }
  
                </div>
              
                <div className="buttonEdit">
                  <div className="btn btn-danger" onClick={this.hideModal}>CLOSE</div>
                  <div className="btn btn-warning" onClick={this.handleShowInput}>EDIT</div>
                  <div className="btn btn-warning">UPDATE</div>
                </div>
              </div>
            </div>
        )
    }
}
