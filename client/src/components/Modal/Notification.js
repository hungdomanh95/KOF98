import React, { Component } from "react";
import { connect } from "react-redux";
import {getAddCharacter,getDeleteCharacter,getUpdateCharacter,onOffNoti} from '../../redux/action/characterAction'
import Admin from "../Admin/Admin"
class Notification extends Component {
 
  confirm = (data) => {
    // e.preventDefault(); 
    console.log("this.props.paramsNoti",this.props.paramsNoti)
    this.props.closeNotification()
    if(this.props.paramsNoti){
      if(this.props.paramsNoti.type  === "ADD_CHARACTER"){
        this.props.addCharacter(this.props.paramsNoti.data) 
      }else if (this.props.paramsNoti.type ==="DELETE_CHARACTER")
      {
        this.props.delCharacter(this.props.paramsNoti.data)
        // console.log("DELETE CHARACTER");
      }else if (this.props.paramsNoti.type ==="UPDATE_CHARACTER")
      {
        this.props.upDateCharacter(this.props.paramsNoti.data)
      }
    }     
       
}
  closeNotification = () => {
    this.props.closeNotification()
  }


  render() {
    // console.log("this.props.paramsNoti.type",this.props.paramsNoti.type !== "DELETE_SUCCESS");
    // console.log("this.props.sucessDelCharacter",this.props.sucessDelCharacter)
    
    return (
      <div className="notification">
        <div className="buttonNoti">
          {this.props.paramsNoti && this.props.paramsNoti.type  === "ADD_CHARACTER" &&
            <h1>WOULD YOU LIKE ADD ITEM ?</h1>
          }
          {this.props.paramsNoti && this.props.paramsNoti.type === "DELETE_CHARACTER" &&
          <h1>WOULD YOU LIKE DELETE ITEM ?</h1>
          }
          {this.props.paramsNoti && this.props.paramsNoti.type === "UPDATE_CHARACTER" &&
          <h1>WOULD YOU LIKE UPDATE ITEM ?</h1>
          }
          {this.props.paramsNoti && this.props.paramsNoti.type === "SUCCESS" &&
          <h1>{this.props.paramsNoti.data}</h1>
          }
          {/* {this.props.paramsNoti && this.props.paramsNoti.type ==="SUCCESS" &&
          <h1>{this.props.paramsNoti.data}</h1>
          } */}
          {this.props.paramsNoti && this.props.paramsNoti.type !== "SUCCESS" && 
          <div className="btn btn-success" onClick={this.confirm}>YES</div>
          }  
          <div onClick={this.closeNotification} className="btn btn-danger">CLOSE</div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    sucessAddCharacter: state.characterReducer.sucessAddCharacter,
    Listcharacter: state.characterReducer.listcharacter,
    statusRequest: state.characterReducer.statusRequest, 
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addCharacter: (data) => {
      dispatch(getAddCharacter(data));
    },
    closeNotification: () => {
      dispatch(onOffNoti())
    },
    delCharacter: (data) => {
      console.log(data)
      dispatch(getDeleteCharacter(data))
    },
    upDateCharacter: (data) => {
      dispatch(getUpdateCharacter(data))
    }
  };

};

export default connect(mapStateToProps, mapDispatchToProps)(Notification);
