import './scss/App.scss';
import { Route, Switch, BrowserRouter, Link } from "react-router-dom";
import React, { Fragment } from "react";
import Admin from "./components/Admin/Admin";
import Fighter from "./components/Fighter/Fighter";
import Home from "./components/Home/Home";
function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <Fragment>
          <div className='menu' >
            <Link  to ="/" >HOME</Link>
            <Link  to ="/fighter">FIGHTER</Link>
            <Link  to ="/admin" >ADMIN</Link>
          </div>

          <Switch>
            <Route path="/admin" component={Admin}/>
            <Route path="/fighter" component={Fighter}/>
            <Route path="/" component={Home}/>
          </Switch>
        </Fragment>
        </BrowserRouter>
    </div>
  );
}

export default App;
