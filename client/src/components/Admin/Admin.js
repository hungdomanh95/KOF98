import Axios from "axios";
import React, { Component } from "react";
import { GetListCharacter,delChacracter,onChangeState,onOffModal } from "../../redux/action/characterAction";
import { URL } from "../../helper/config";
import { connect } from "react-redux";
import { characterReducer } from "../../redux/reducer/characterReducer";
import { IMGCharacter } from "../ListData";
import { Fragment } from "react";
import Modal from "./Modal"
import FormAddCharacter from "./FormAddCharacter";
import { ModalFormAddCharacter } from "../Modal/ModalFormAddCharacter";

class Admin extends Component {
  state = {
    Character: [],
    selectCharacter: undefined,
    statusInput: false,
    modalStatus: false,
  };

  componentDidMount() {
    this.props.onsaveListCharacter();
  }
  componentDidUpdate(prevProps, prevState) {
    // console.log("HUNG KHUNG")
    if (this.props.Listcharacter !== prevProps.Listcharacter) {
      // console.log("Listcharacter", this.props.Listcharacter);
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
    if(this.props.sucessAddCharacter !== prevProps.sucessAddCharacter) {
      this.props.onsaveListCharacter();
      this.props.changeState()
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
  // hideModal = () => {
  //   this.setState({
  //     statusModal: !this.state.statusModal,
  //   });
  // };
  showModal = () => {
    this.setState({
      modalStatus: !this.state.modalStatus
    })
  }

  deleteListCharacter = () => {
    this.props.deleteCharacter()
  }
  
  render() {
    console.log("sucessAddCharacter", this.props.sucessAddCharacter)
    // console.log('deleteListCharacter: ', this.props.deleteCharacter);

    return (
      <div className="admin">
        {(this.state.selectCharacter =! undefined && this.props.statusModal && <Modal itemCharacter = {this.state.selectCharacter}/>)}
        <h1 className="admin-title">QUẢN LÝ VÕ SĨ</h1>
        <table className="Listcharacter">
          {/* this.props.Listcharter grant điều kiện để đc chạy tiếp  */}
          <thead>
            <tr>
              <th>STT</th>
              <th>Icon</th>
              <th>Team</th>
              <th>Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.Character && this.state.Character.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>
                      <img className="imgCharacter" src={item.URLImageButton} />
                    </td>
                    <td>{item.team}</td>
                    <td>{item.name}</td>
                    <td>
                      <div>
                      <button onClick={() =>{this.EditCharacter(item)}} className="btn btn-warning editCharacter">SHOW</button>
                      <div onClick={this.deleteListCharacter} className="btn btn-danger">DELETE</div>                      
                      </div>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
        {this.state.modalStatus && <FormAddCharacter/>}
        <div className="btn btn-warning" onClick={this.showModal}>ADD CHARACTER</div>      
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    // return về 1 cái biến sẽ trở thành cái props của component 
    Listcharacter: state.characterReducer.listcharacter,
   statusModal: state.characterReducer.statusModal,
   sucessAddCharacter: state.characterReducer.sucessAddCharacter,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onsaveListCharacter: () => {
      dispatch(GetListCharacter());
    },
    onOffModal: () => {
      dispatch(onOffModal())
    },
    deleteCharacter: () => {
      dispatch(delChacracter());
    },
    changeState:()=>{
      dispatch(onChangeState());
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Admin);
