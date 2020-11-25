import React from 'react'
import {Route,Redirect} from 'react-router-dom'
import { useSelector,useDispatch } from "react-redux";
const AuthAdmin = ({path, component: Component}) => {
    return (
        <Route path={path} render={(routeProps)=>{
            const user = JSON.parse(localStorage.getItem('user'));
            console.log('user: ', user);
            if(user){
                if(user.role === 'admin'){
                   return <Component {...routeProps} />
                }
                return <Redirect to="/" />;
            }
           alert("Vui long dang nhap quyen admin")
           return <Redirect to='/' />
       }} />
    )
}

export default AuthAdmin
