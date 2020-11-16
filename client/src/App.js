import logo from './logo.svg';
import './App.scss';
import axios from "axios"
import React, { useEffect } from "react";
import {URL} from './helper/config'
function App() {
  useEffect(() => {
    console.log("----");
    axios.get(`${URL}/api/helloworld`).then((result)=>{
      console.log('result: ', result);
    })
   
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
