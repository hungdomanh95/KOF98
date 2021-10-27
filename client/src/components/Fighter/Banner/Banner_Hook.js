import React from 'react';
import {useDispatch} from "react-redux";
import { renderAdminFighter } from '../../../redux/action/characterAction';
export default function Banner_Hook() {
    const dispatch = useDispatch()
    //Render component AdminFighter_Hook
    const handleAdmin=()=>{
        dispatch(renderAdminFighter())
    };
    return (
        <div className="banner">
            <div className="banner__Background">
                <img src="/images/Background.jpg" />
            </div>
            <div className="banner__Logo">
                <img src="/images/Logo.png"  />
            </div>
            <img className="banner__Character" src="/images/Kyo_Flame.png" />
            <div className="banner__Link ">
                <div className="banner__Item">
                    <img src="/images/Instinct.png" />
                    <span>Fighter</span>
                </div>
                <div className="banner__Item">
                    <img src="/images/Mukai.png" /> 
                    <span>Features</span>
                </div>
                <div className="banner__Item">
                    <img src="/images/Magaki.png" />
                    <span>Gallery</span>
                </div>
                <div className="banner__Item"
                     onClick={handleAdmin} 
                >
                    <img src="/images/Ash.png" /> 
                    <span>Admin</span>
                </div>
            </div>
        </div>
    )
}
