import React from 'react'
import {Route,Redirect} from 'react-router-dom'
const Auth = ({path, component: Component}) => {
    return (
        <Route path={path} render={(routeProps)=>{
           if(localStorage.getItem('user')){
               return <Component {...routeProps} />
           }
           alert("Vui long dang nhap")
           return <Redirect to='/' />
       }} />
    )
}

export default Auth
