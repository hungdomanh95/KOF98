import "./scss/App.scss";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import React, { Fragment } from "react";
// import { useSelector } from "react-redux";
import Admin from "./components/Admin/Admin";
import Fighter from "./components/Fighter/Fighter";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";
import AuthAdmin from "./components/Auth/AuthAdmin";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Fragment>
          {/* <div className='menu' >
            <Link  to ="/" >HOME</Link>
            <Link  to ="/fighter">FIGHTER</Link>
            <Link  to ="/admin" >ADMIN</Link>
          </div> */}

          <Switch>
            <Route exact path="/" component={Home} />
            <AuthAdmin path="/admin" component={Admin} />
            <Auth path="/fighter" component={Fighter} />
          </Switch>
        </Fragment>
      </BrowserRouter>
    </div>
  );
}

export default App;
