import React, { useState,useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import {handleInforModal} from "../../../redux/action/characterAction";
export default function ShowTeam_Hook(props) {
    const  dispatch = useDispatch();
    //Data from store
    const {newListCharacter} = useSelector(state => state.characterReducer);
    //Created Array newList to add all character have the same team
    const [newList,setNewList] = useState([]);
    //Filter all character have the same team
    useEffect(()=>{
        if(newListCharacter){
            let newList = newListCharacter.filter((item)=>{
                return item.team === props.team
            })
            setNewList(newList)
        }
    },[newListCharacter]);
    //Send info character to store to open component ModalFighter_Hook when click the character
    const handleCharacter = (character) => {
        let param = {
            data:character,
            isRenderModal:true
        }
        dispatch(handleInforModal(param))
    };
    return (
        <div className="showTeam">
            <h5>Team {props.team}</h5>
            <div className="teamItems">
                {newList.length && newList.map((item,index)=>
                    <div 
                        className="itemContent" 
                        key={index}
                        onClick={()=>{handleCharacter(item)}}
                    >
                        <img src={item.images} alt=""/>
                        <p>{item.name}</p>
                    </div>
                )}
            </div>
        </div>
    )
}
