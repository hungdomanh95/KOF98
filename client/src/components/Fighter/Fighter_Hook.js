import React ,{ useEffect,useState }from 'react';
import { useDispatch, useSelector } from "react-redux";
import { listImage } from "./Listdata";
import { getCharacter,updateInforCharacter } from "../../redux/action/characterAction";
import Banner_Hook from "./Banner/Banner_Hook";
import ShowFighter_Hook from "./ShowFighter/ShowFighter_Hook";
import ModalFighter_Hook from "./ModalFighter/ModalFighter_Hook";
import AdminFighter_Hook from './AdminFighter/AdminFighter_Hook';
export default function Fighter_Hook() {
    const dispatch = useDispatch();
    //Data from store
    const { characterItems,isRenderModal,isRenderAdFighter } = useSelector(state => state.characterReducer);
    const [ isDelayAdFighter,setIsDelayAdFighter ] = useState(false);
    const [ isDelayModal,setIsDelayModal ] = useState(false);
    //Call api getListCharacter to dispatch to store
    useEffect(()=>{dispatch(getCharacter())},[])
    //Function set delay time to run animation when open or close component
    const setTimeDelay = (isCheck,setDelay) => {
        {isCheck ? setDelay(true) : setTimeout(()=>{setDelay(false)},300)}
    }
    //Set delay time to run animation when open or close component AdminFighter_Hook
    useEffect(()=>{setTimeDelay(isRenderAdFighter,setIsDelayAdFighter)},[isRenderAdFighter])
    //Set delay time to run animation when open or close component ModalFighter_Hook
    useEffect(()=>{setTimeDelay(isRenderModal,setIsDelayModal)},[isRenderModal])
    //Add images from listImages to data from store
    useEffect(()=>{
        if(characterItems){
            let newListCharacter = characterItems.map((character)=>{
                let newImages = listImage.find((item)=>{
                    return item.id === character.id
                })
                return {...character,...newImages} 
            })
            dispatch(updateInforCharacter(newListCharacter))
        };
    },[characterItems])
    //Hidden or visible the scrollbar when the ModalFighter or AdFighter open or close
    useEffect(()=>{
        if(isRenderModal || isRenderAdFighter) document.body.style.overflow="hidden";
        else document.body.style.overflow="scroll";
    },[isRenderAdFighter,isRenderModal])
    return (
        <>
            <Banner_Hook />
            <ShowFighter_Hook />
            {isDelayModal && <ModalFighter_Hook isRenderModal={isRenderModal}/>}
            {isDelayAdFighter && 
                <AdminFighter_Hook isRenderAdFighter={isRenderAdFighter} setTimeDelay={setTimeDelay}/>}
        </>
        )
    }
