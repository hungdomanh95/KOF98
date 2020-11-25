import React, { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {register,login,screensRegister,screensLogin} from "../../redux/action/userAction";
import {SignUpUserSchema} from '../Auth/Validate'
const Form = () => {
  const dispatch = useDispatch();

  const { statusLogin } = useSelector((state) => state.userReducer);

  const user = {
    name: "hung7",
    password: "hung"
  };
  SignUpUserSchema.validate(user)
  .then(function(value) {
    console.log(value); 
  })
  .catch(function(err) {
    console.log(err);
  });
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [notiSign, setNotiSign] = useState("");
  const inputUserName = (e) => {
    setUserName(e.target.value);
  };
  const inputPassword = (e) => {
    setPassword(e.target.value);
  };
  const getRegister = () => {
    dispatch(register(userName, password));
  };
  const goToLogin = () => {
    dispatch(screensLogin());
  };
  const getLogin = () => {
    dispatch(login(userName, password));
  };
  const goToRegister = () => {
    dispatch(screensRegister());
  };
  return (
    <div className="form">
      <div className="title">
        <h2>KOF'98</h2>
      </div>
      <div className="body-form">
        {}
        <div className="input username">
          <i class="fa fa-user"></i>
          <input placeholder="Name" onChange={(e) => inputUserName(e)} />
        </div>
        <div className="input password">
          <i class="fa fa-lock"></i>
          <input placeholder="Password" onChange={(e) => inputPassword(e)} />
        </div>
        {statusLogin ? (
          <div className="btn btn-login" onClick={getLogin}>
            LOGIN
          </div>
        ) : (
          <div className="btn btn-register" onClick={getRegister}>
            REGISTER
          </div>
        )}
      </div>
      <div className="bottom-form">
        {statusLogin ? (
          <Fragment>
            <span style={{ opacity: "0.5" }}>New to KOF'98 ? </span>
            <span onClick={goToRegister}>Sign up now</span>
          </Fragment>
        ) : (
          <Fragment>
            <span style={{ opacity: "0.5" }}>Already a member</span>
            <span onClick={goToLogin}>Login now</span>
          </Fragment>
        )}
      </div>
    </div>
  );
};

export default Form;
