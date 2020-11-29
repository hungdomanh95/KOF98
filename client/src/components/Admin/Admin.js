import Axios from "axios";
import React, { Component } from "react";
import { GetListCharacter } from "../../redux/action/characterAction";
import { URL } from "../../helper/config";
import { connect } from "react-redux";
import { characterReducer } from "../../redux/reducer/characterReducer";
import Button from 'react-bootstrap/Button';
class Admin extends Component {
  // this.props.onsaveListCharacter_1()
  // console.log(this.props.getCharacter)
  // Axios({
  //     method: "GET",
  //     // url:'http://localhost:5000/characters/getCharacter'
  //     url:`${URL}/characters/getCharacter` // dùng `` để dùng được biến URL
  // }).then(res =>{
  //     this.props.onsaveListCharacter(res.data) // res.data ở đây bằng data line 33 34
  //     console.log(res);
  // })
  // .catch (err => {
  //     console.log(err)
  // })
  componentDidMount() {
    this.props.onsaveListCharacter();
  }

  render() {
    console.log("Listcharacter",this.props.Listcharacter);
    return (
      <div>
        <h1>QUẢN LÝ VÕ SĨ</h1>
        <div className="container">
          <button className="btn btn-danger">THÊM VÕ SĨ</button>
          {/* this.props.Listcharter grant điều kiện để đc chạy tiếp  */}
          {this.props.Listcharacter && this.props.Listcharacter.map((item, index) => {
            return (
              <div className="character" key={index}>
                <div>{item.name}</div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
    return {
      Listcharacter: state.characterReducer.listcharacter,
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      onsaveListCharacter: () => {
        dispatch(GetListCharacter());
      },
    };
  };
export default connect(mapStateToProps, mapDispatchToProps)(Admin);
