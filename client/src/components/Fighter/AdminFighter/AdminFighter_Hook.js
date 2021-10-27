import React,{ useState,useEffect }from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { renderAdminFighter,handleParamForm,handleParamNoti } from '../../../redux/action/characterAction';
import FormAdmin_Hook from './FormAdmin_Hook';
import Notification_Hook from '../Notification/Notification_Hook';
import Loading from '../../Loading/Loading';
import ControlSearchSort from '../Search-Sort/ControlSearchSort';
export default function AdminFighter_Hook(props) {
    const dispatch = useDispatch();
    //Data from store
    const { newListCharacter,isRenderFormAdmin,isRenderNoti,isLoading,
            isAddSuccess,isDeleteSuccess,isEditSuccess        
    } = useSelector((state)=>state.characterReducer);
    // Created array listcharacter to receiver data after search and sort then render listcharacter
    const [listCharacter,setListCharater] = useState([]);
    //Variable check to open or close sortNameContent
    const [isDelayFormAdmin,setIsDelayFormAdmin] = useState(false);
    //Set delay time to run animation when open or close component FormAdmin_Hook
    useEffect(()=>{
        props.setTimeDelay(isRenderFormAdmin,setIsDelayFormAdmin)
    },[isRenderFormAdmin]);
    //Function render FormAdmin_Hook and send data when click ADD or EDIT button
    const handleShowForm=(data)=>{
        let param = {
            isRenderForm : true,
            data
        }
        dispatch(handleParamForm(param))
    };
    //Function render Notification and send data to delete character when click DELETE button
    const handleButtonDelete = (data) => {
        let param = {
            isRenderNoti:true,
            type:"DELETE_CHARACTER",
            data:data
        }
        dispatch(handleParamNoti(param))
    };
    //Function close AdminFighte_Hook
    const handleButtonCancel = () => {dispatch(renderAdminFighter())};
    useEffect(()=>{
        if(isAddSuccess)
        dispatch(handleParamNoti({isAddSuccess:true,isLoading:false,isRenderNoti:true}))
    },[isAddSuccess])
    useEffect(()=>{
        if(isDeleteSuccess)
        dispatch(handleParamNoti({isDeleteSuccess:true,isLoading:false,isRenderNoti:true}))
    },[isDeleteSuccess])
    useEffect(()=>{
        if(isEditSuccess)
        dispatch(handleParamNoti({isEditSuccess:true,isLoading:false,isRenderNoti:true}))
    },[isEditSuccess])
    return (
        <div className="adminFighter">
            <div className={`adminContent ${props.isRenderAdFighter ? "show" : ""}`}>
                <div className="adminHeader">
                    <h3>LIST CHARACTER</h3>
                </div>
                <div className="adminBody">
                    <div className="showSearch">
                        <ControlSearchSort 
                                newListCharacter={newListCharacter}
                                setListCharater={setListCharater}
                        />
                    </div>
                    <div className="showCharacter">
                        <div className="showTitle">
                            <div className="titleDetail">
                                No.
                            </div>
                            <div className="titleDetail">
                                Name.
                            </div>
                            <div className="titleDetail">
                                Team.
                            </div>
                            <div className="titleDetail">
                                Images
                            </div>
                        </div>
                        <div className="showBody">
                            {listCharacter.map((item,index)=>
                                <div className="characterDetail" key={index}>
                                    <p>{index + 1}</p>
                                    <p>{item.name}</p>
                                    <p>{item.team}</p>
                                    <img src={item.images}/>
                                    <button 
                                        className="btn btn-primary"
                                        onClick={()=>{handleShowForm({type:"EDIT",item})}}
                                    >
                                        EDIT
                                    </button>
                                    <button 
                                        className="btn btn-danger"
                                        onClick={()=>{handleButtonDelete(item.id)}}
                                    >
                                        DELETE
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className="adminFooter">
                    <button 
                        className="btn btn-success"
                        onClick={()=>{handleShowForm({type:"ADD"})}}
                    >
                        ADD NEW
                    </button>
                    <button className="btn btn-secondary" 
                            onClick={handleButtonCancel}
                    >
                        CANCEL
                    </button>
                </div>
            </div>
            {isDelayFormAdmin && <FormAdmin_Hook isRenderFormAdmin={isRenderFormAdmin}/>}
            {isRenderNoti && <Notification_Hook/>}
            {isLoading &&<Loading/>}
        </div>
    )
}
