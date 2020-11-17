import './App.scss';
import React, { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { getCharacter } from "./redux/action/characterAction";
function App() {
  const dispatch = useDispatch()
  const {itemsCharacter} = useSelector(state=>state.characterReducer)
  console.log('itemsCharacter: ', itemsCharacter);
  useEffect(()=>{
    dispatch(getCharacter())
  },[])
  const changeText =() =>{
    
  }
  return (
    <div className="App">
      <input value={itemsCharacter[0].team} onChange={changeText}/>
    </div>
  );
}

export default App;
