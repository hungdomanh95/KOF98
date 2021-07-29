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
            <div className="bannerBackground">
                <img src="/images/Background.jpg" />
            </div>
            <div className="bannerLogo">
                <img src="/images/Logo.png"  />
            </div>
            <img className="bannerCharacter" src="/images/Kyo_Flame.png" />
            <div className="bannerLink ">
                <div className="bannerItem">
                    <img src="/images/Instinct.png" />
                    <span>Fighter</span>
                </div>
                <div className="bannerItem">
                    <img src="/images/Mukai.png" /> 
                    <span>Features</span>
                </div>
                <div className="bannerItem">
                    <img src="/images/Magaki.png" />
                    <span>Gallery</span>
                </div>
                <div className="bannerItem"
                     onClick={handleAdmin} 
                >
                    <img src="/images/Ash.png" /> 
                    <span>Admin</span>
                </div>
            </div>
        </div>
    )
}
