import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getUpdateCharacter,onOffModal,onOffNoti} from '../../../redux/action/characterAction'
import ListCharacter from '../ListCharacter/ListCharacter'


class Information extends Component {
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
      openNofitication = (data) => {
        //   console.log(params)
          var params = {
              type:"UPDATE_CHARACTER",
              data: data
          }
          this.props.onOffNofitication(params)
      }
    render() {
        console.log()
        return (
                <div className="Modal">
                  <div className="showModal">
                    <div className="showModalName">
                        {!this.state.statusInput ? 
                            <p>Name Character: {this.state.value.name}</p> 
                        : 
                            <div> Name Character: <input name = "name" value = {this.state.value.name}  onChange={this.handleChangeInput} />
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
                      <div className="btn btn-warning" onClick={()=> {this.openNofitication(this.state.value)}}>UPDATE</div>
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
      },
      onOffNofitication: (params) => {
          dispatch(onOffNoti(params))
      }
    }
  }
  export default connect(null,mapDispatchToProps)(Information);
