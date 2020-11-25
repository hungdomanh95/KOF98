import React, { useEffect, useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import {screensLogin,deleteSuccess} from "../../redux/action/userAction";
import Form from "./Form";
const Home = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { notiRegister } = useSelector((state) => state.userReducer);
  const { notiLogin } = useSelector((state) => state.userReducer);
  console.log('notiLogin: ', notiLogin);

  useEffect(() => {
    localStorage.removeItem("user")
  }, [])

  useEffect(() => {
    if(notiLogin && notiLogin.success){
      if(notiLogin.user.role === 'user'){
        history.push('/fighter')
      }else{
        history.push('/admin')
      }
      dispatch(deleteSuccess());
      localStorage.setItem("user",JSON.stringify(notiLogin.user))
    }else if(notiRegister && notiRegister.success){
      dispatch(screensLogin());
      dispatch(deleteSuccess());
    }
  }, [notiLogin,notiRegister])

  return (
    <div className="home">
      <div className="bg-kof"></div>
      <div className="content">
        <Form/>
      </div>
    </div>
  );
};

export default Home;
