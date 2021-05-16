import React, { Component } from "react";
import { GetListCharacter } from "../../redux/action/characterAction";
import { connect } from "react-redux";
class Admin extends Component {
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
