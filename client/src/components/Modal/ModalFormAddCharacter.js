import React, { Component } from "react";
import { connect } from "react-redux";
import { onOffModal } from "../../redux/action/userAction";

class ModalFormAddCharacter extends Component {
  render() {
    return( 
    <div>
        
        <div className="showModal">
                <h1>WOULD YOU LIKE ADD NEW ITEM?</h1>
                <div className="buttonEdit">
        <div className="btn btn-danger">YES</div>
        <div className="btn btn-warning">NO</div>
        </div>
        </div>
    </div>
    )
}
}

// const mapStateToProps = (state) => {
//   return {
//     statusModal: state.userReducer.statusModal,
//   };
// };

const mapDispatchToProps = (dispatch) => {
    return {
        offOnModal: () => {
            dispatch(onOffModal())
        }
    }
 }

export { ModalFormAddCharacter };
