import Axios from "axios";
import React, { Component } from 'react'
import {URL} from "../../../helper/config"
import { connect } from "react-redux";
import {characterReducer} from "../../../redux/reducer/characterReducer"
import {GetListCharacter,onOffModal,getDeleteCharacter,onOffNoti} from "../../../redux/action/characterAction"
import { Fragment } from "react";
import Admin from "../Admin"
import {IMGCharacter} from "../../ListData"
// import Modal from '../Modal'
import Information from "../InforCharacter/Information";

 class ListCharacter extends Component {
        state = {
            Character: [],
            selectCharacter: undefined,
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
            if(this.props.sucessAddCharacter !== prevProps.sucessAddCharacter) {
              this.props.onsaveListCharacter();
            //   this.props.changeState()
            }
          }

          EditCharacter = (item) => {
            this.setState({
              // ! là nghịch đảo của giá trị
              // example : !true = false
              selectCharacter: item,
            });
            this.props.onOffModal()
          };
          openNofitication = (params) => {
            // console.log(result)
            var params = {
              type: "DELETE_CHARACTER",
              data: params
            }
            this.props.onOffNofitication(params)
          }
          render() {
            // console.log("this.props.onOffNofitication",this.props.onOffNofitication)
            // console.log("this.props.deleteSuccessCharacter",this.props.deleteSuccessCharacter);
        return (
        <div className="admin">
          {(this.state.selectCharacter !== undefined && this.props.statusModal  && <Information itemCharacter = {this.state.selectCharacter}/>)}
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
                                <button onClick={() =>{this.EditCharacter(item)}} className="btn btn-warning">SHOW</button>
                                <div onClick={()=>{this.openNofitication(item.id)}} className="btn btn-danger">DELETE</div>              
                                    </div>
                                </td>
                            </tr>
                                );
                })}
                </tbody>
            </table>
        </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
      // return về 1 cái biến sẽ trở thành cái props của component 
    Listcharacter: state.characterReducer.listcharacter,
    statusModal: state.characterReducer.statusModal,
    sucessAddCharacter: state.characterReducer.sucessAddCharacter,
    statusModalAdd: state.characterReducer.statusModalAdd,
    statusNofitication: state.characterReducer.statusNofitication,
    successUpDateCharacter:state.characterReducer.sucessDelCharacter,

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
      onOffNofitication: (params) => {
        dispatch(onOffNoti(params))
      }

    }
}
    //   changeState:()=>{
    //     dispatch(onChangeState());
    //   }

  export default connect(mapStateToProps, mapDispatchToProps)(ListCharacter);
