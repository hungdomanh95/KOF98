import React, { Component } from 'react'
import {getUpdateCharacter,onOffModal} from '../../redux/action/characterAction'
// import {} from '../../redux/action/userAction'
import { connect } from "react-redux";
import Admin from '../Admin/Admin'


class Modal extends Component {
    state={
        statusInput:false,
        value:this.props.itemCharacter,
    }
    handleShowInput=()=>{
        this.setState({
            statusInput:!this.state.statusInput
        })
    }
    handleChangeInput=(e)=>{
    const name = e.target.name
        this.setState({
            value:{
                ...this.state.value,
                [name]:e.target.value,
                
            }
        })
    }
    // goi hàm để dispatch lên action
    handleOffShowModal = () => {
       this.props.offShowModal()
      };

    render() {
        console.log('this.props.selectCharacter: ', this.state.value);
        return (
            <div className="Modal">
              <div className="showModal">
                <div className="showModalName">
                    {!this.state.statusInput ? 
                        <p>Name Character: {this.state.value.name}</p> 
                    : 
                        <div> Name Character: <input name = "name" value = {this.state.value.name} ref="theTextInput" onChange={this.handleChangeInput} />
                        </div>
                    }
                     {!this.state.statusInput ? 
                        <p>Name Team: {this.state.value.team}</p> 
                    : 
                        <div> Team: <input name = "team" value = {this.state.value.team} onChange={this.handleChangeInput} />
                        </div>
                    }
                    {!this.state.statusInput ? 
                        <p>Intro: {this.state.value.intro}</p> 
                    : 
                        <div> Intro Character: <input name = "intro" value = {this.state.value.intro} onChange={this.handleChangeInput} />
                        </div>
                    }
                </div>
              
                <div className="buttonEdit">
                 <div className="btn btn-danger" onClick={this.handleOffShowModal}>CLOSE</div>
                  <div className="btn btn-warning" onClick={this.handleShowInput}>EDIT</div>
                  <div className="btn btn-warning">UPDATE</div>
                </div>
              </div>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
      // tạo 1 biến hứng hàm rồi dispatch lên store
      offShowModal: () => {
          dispatch(onOffModal());
      }
    }
  }

export default connect(null,mapDispatchToProps)(Modal);
