import Axios from "axios";
import React, { Component } from "react";
import { GetListCharacter } from "../../redux/action/characterAction";
import { URL } from "../../helper/config";
import { connect } from "react-redux";
import { characterReducer } from "../../redux/reducer/characterReducer";
import { IMGCharacter } from "../ListData";
import { Fragment } from "react";

class Admin extends Component {
  state = {
    Character: [],
    statusModal: false,
    selectCharacter: undefined,
    statusInput: false,
  };

  componentDidMount() {
    this.props.onsaveListCharacter();
  }
  componentDidUpdate(prevProps, prevState) {
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
  }
  EditCharacter = (item) => {
    this.setState({
      // ! là nghịch đảo của giá trị
      // example : !true = false
      statusModal: !this.state.statusModal,
      selectCharacter: item,
    });
  };
  hideModal = () => {
    this.setState({
      statusModal: !this.state.statusModal,
    });
  };
  handleChangeName = (e) => {
    this.setState({
      statusInput: !this.state.statusInput
    })
  }
  HandleChange = (e) => {
    this.setState({
    })
  }
  handleShowInput = () => {
    this.setState({
      statusInput: !this.state.statusInput
    })
  }


  render() {
    // console.log("Character", this.state.Character);
    console.log("Character", this.state.selectCharacter)
    return (
      <div className="admin">
        {
          (this.state.selectCharacter = !undefined && this.state.statusModal && (
            <div className="Modal">
              <div className="showModal">
                <div className="showModalName">
                  {!this.state.statusInput ? 
                  <p>Name Character: {this.state.selectCharacter.name}</p> : 
                  <input name = "name" value = {this.state.selectCharacter.name} /> }
  
                </div>
                {/* <div className="showModalTeam">
                  Team: {this.state.selectCharacter.team}
                </div>
                <div className="showModalIntro">
                  Information: {this.state.selectCharacter.intro}
                </div>
                <div className="showModalFate">
                  Fate: {this.state.selectCharacter.fate}
                </div>
                <div className="showModalThunder">
                  <div className="thunderItem">
                    Thunder Element: {this.state.selectCharacter.thunderElement}
                  </div>
                  <div className="thunderItem">
                    Water Element: {this.state.selectCharacter.waterElement}
                  </div>
                  <div className="showSkill">
                    <div className="PassiveSKill">
                      Frist Passive: {this.state.selectCharacter.passive1.title}
                    </div>
                    <div className="PassiveSKill">
                      Second Passive:{" "}
                      {this.state.selectCharacter.passive1.content}
                    </div>
                    <div className="skillItem">
                      First Skill: {this.state.selectCharacter.passive2.title}
                    </div>
                    <div className="skillItem">
                      Second Skill:{" "}
                      {this.state.selectCharacter.passive2.content}
                    </div>
                  </div>
                </div> */}
                <div className="buttonEdit">
                  <div className="btn btn-danger" onClick={this.hideModal}>CLOSE</div>
                  <div className="btn btn-warning" onClick={this.handleShowInput}>EDIT</div>
                  <div className="btn btn-warning">UPDATE</div>
                </div>
              </div>
            </div>
          ))
        }
        {/* {this.state.statusModal && <h1>HELLO WORLD</h1> } */}

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
            {this.state.Character &&
              this.state.Character.map((item, index) => {
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
                      <div className="btn btn-danger">DELETE</div>
                      </div>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
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
