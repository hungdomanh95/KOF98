import Axios from "axios";
import React, { Component } from "react";
import { GetListCharacter,delChacracter,onChangeState,onOffModal,onOffModalAdd,onOffNoti } from "../../redux/action/characterAction";
import { URL } from "../../helper/config";
import { connect } from "react-redux";
import { characterReducer } from "../../redux/reducer/characterReducer";
import { IMGCharacter } from "../ListData";
import { Fragment } from "react";
import Modal from "./Modal"
import FormAddCharacter from "./FormAddCharacter";
import ListCharacter from "./ListCharacter/ListCharacter";
import Notification from "../Modal/Notification"

class Admin extends Component {
  state = {
    Character: [],
    selectCharacter: undefined,
    // statusInput: false,
    // modalStatus: false,
  };

  componentDidMount() {
    this.props.onsaveListCharacter();
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.props.Listcharacter !== prevProps.Listcharacter) {
      var Character = this.props.Listcharacter.map((item) => {
        let IMG = IMGCharacter.find((itemIMG) => {
          return item.id === itemIMG.id;
        });
        return { ...item, ...IMG };
      });
      this.setState({
        Character,
      });
    }
    if( this.props.sucessDelCharacter !== prevProps.sucessDelCharacter ){
      // console.log(",this.props.sucessDelCharacter",this.props.sucessDelCharacter)
      if(this.props.sucessDelCharacter.success === true) {
        var params = {
          type: "SUCCESS",
          data: this.props.sucessDelCharacter.message
        }
        this.props.onOffNotification(params)
      }
      this.props.onsaveListCharacter();
    }
    if(this.props.sucessAddCharacter !== prevProps.sucessAddCharacter) {
      console.log("this.props.sucessAddCharacter", this.props.sucessAddCharacter)
      if(this.props.sucessAddCharacter.success === true) {
        // console.log(this.props.sucessAddCharacter)
        var params = {
          type:"SUCCESS",
          // dòng 38 data cố định
          data:this.props.sucessAddCharacter.message
        }
        // console.log("data",data)
        this.props.onOffNotification(params)
      }
      
      this.props.onsaveListCharacter();
      // this.props.changeState()
    }
    if (this.props.upDateCharacter !== prevProps.upDateCharacter) {
      if(this.props.upDateCharacter.success === true) {
        var  params = {
          type: "SUCCESS",
          data: this.props.upDateCharacter.message
        }
        this.props.onOffNotification(params)
      }
      this.props.onsaveListCharacter();
    }
  }

  EditCharacter = (item) => {
    this.setState({
      // ! là nghịch đảo của giá trị
      // example : !true = false
      // statusModal: !this.state.statusModal,
      selectCharacter: item,
    });
    this.props.onOffModal()
  };
  showModalAdd = () => {
    this.props.showModalAddCharacter()
  }
  render() {
    return (
      <Fragment>
        <ListCharacter/>
        {this.props.statusModalAdd && <FormAddCharacter/>}
        {this.props.statusNofitication && <Notification paramsNoti={this.props.paramsNoti} />}
        <div className="btn btn-danger" onClick={this.showModalAdd}>ADD NEW CHARACTER</div>
        </Fragment>
    
    );
  }
}
const mapStateToProps = (state) => {
  return {
    // return về 1 cái biến sẽ trở thành cái props của component 
  Listcharacter: state.characterReducer.listcharacter,
  statusModal: state.characterReducer.statusModal,
  sucessAddCharacter: state.characterReducer.sucessAddCharacter,
  statusModalAdd: state.characterReducer.statusModalAdd,
  statusRequest: state.characterReducer.statusRequest,
  statusNofitication: state.characterReducer.statusNofitication,
  paramsNoti: state.characterReducer.paramsNoti,
  sucessDelCharacter: state.characterReducer.sucessDelCharacter,
  upDateCharacter: state.characterReducer.upDateCharacter
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onsaveListCharacter: () => {
      dispatch(GetListCharacter());
    },
    onOffNotification: (params) => {
      dispatch(onOffNoti(params));
  },
  closeNotification: () => {
    dispatch(onOffNoti())
  },
    showModalAddCharacter: () => {
      dispatch(onOffModalAdd());
    },
    changeState:()=>{
      dispatch(onChangeState());
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Admin);
