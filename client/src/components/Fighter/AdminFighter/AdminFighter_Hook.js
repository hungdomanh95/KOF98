import React,{useState,useEffect}from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { renderAdminFighter,handleParamForm,handleParamNoti } from '../../../redux/action/characterAction';
import FormAdmin_Hook from './FormAdmin_Hook';
import Notification_Hook from '../Notification/Notification_Hook';
import Loading from '../../Loading/Loading';
import ControlSearchSort from '../Search-Sort/ControlSearchSort';
import { listTeam,listSortName } from '../Listdata';
export default function AdminFighter_Hook(props) {
    const dispatch = useDispatch();
    //Data from component Fighter_Hook
    const {isRenderAdFighter} = props;
    //Data from store
    const { newListCharacter,
            isRenderFormAdmin,
            isRenderNoti,
            isLoading} = useSelector((state)=>state.characterReducer);
    // Created array listcharacter to receiver data after search and sort then render listcharacter
    const [listCharacter,setListCharater] = useState([]);
    //Variable check to open or close sortNameContent
    const [isRenderSortName,setIsRenderSortName] = useState(false);
    //Variable check to open or close sortTeamContent
    const [isRenderSortTeam,setIsRenderSortTeam] = useState(false);
    const [nameSort,setNameSort] = useState("Default");
    const [teamSort,setTeamSort] = useState("All");
    const [isDelayFormAdmin,setIsDelayFormAdmin] = useState(false);
    //Set delay time to run animation when open or close component FormAdmin_Hook
    useEffect(()=>{
        if(isRenderFormAdmin) setIsDelayFormAdmin(true)
        else setTimeout(()=>{
            setIsDelayFormAdmin(false)
        },300)
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
    const handleButtonCancel = () => {
        dispatch(renderAdminFighter())
    };
    //Function to check close or open SortNameContent
    const handleButtonSortName = () => {
        setIsRenderSortName(!isRenderSortName)
        if(isRenderSortTeam) setIsRenderSortTeam(false)
    };
    //Function to check close or open SortTeamContent
    const handleButtonSortTeam = () => {
        setIsRenderSortTeam(!isRenderSortTeam)
        if(isRenderSortName) setIsRenderSortName(false)
    };
    //Function take value when click sortNameItem and close sortNameContent after that
    const handleSortName = (item) => {
        setNameSort(item)
        {isRenderSortName && document.getElementById("sortNameContent").classList.remove("show")}
        setIsRenderSortName(false)
    };
    //Function take value when click sortTeamItem and close sortTeamContent after that
    const handleSortTeam = (item) => {
        setTeamSort(item)
        {isRenderSortTeam && document.getElementById("sortTeamContent").classList.remove("show")}
        setIsRenderSortTeam(false)
    };
    return (
        <div className="adminFighter">
            <div className={`adminContent ${isRenderAdFighter ? "show" : ""}`}>
                <div className="adminHeader">
                    <h3>LIST CHARACTER</h3>
                </div>
                <div className="adminBody">
                    <div className="showSearch">
                        <ControlSearchSort 
                                newListCharacter={newListCharacter}
                                setListCharater={setListCharater}
                                teamSort={teamSort}
                                nameSort={nameSort}
                        />
                    </div>
                    <div className="bodyTitle">
                        <div className="showTitle">
                            <div className="titleDetail">
                                <p>No.</p>
                            </div>
                            <div className="titleDetail">
                                <button 
                                    className="sortNameButton"
                                    onClick={handleButtonSortName}
                                >
                                    Name ↓
                                </button>
                                <div 
                                    className={`sortNameContent ${isRenderSortName ? "show" : ""}`}
                                    id="sortNameContent"
                                >
                                    {listSortName.map((item,index)=>
                                        <p 
                                            key={index}
                                            onClick={()=>{handleSortName(item.sort)}}
                                            className={`nameDetail ${item.sort == nameSort ? "active" : ""}`}
                                        >
                                            {item.sort}
                                        </p>
                                    )}
                                </div>
                            </div>
                            <div className="titleDetail">
                                <button 
                                    className="sortTeamButton"
                                    onClick={handleButtonSortTeam}    
                                >
                                    Team ↓
                                </button>
                                <div 
                                    className={`sortTeamContent ${isRenderSortTeam ? "show" : ""}`} 
                                    id="sortTeamContent"
                                >
                                    <p 
                                        className={`teamDetail ${teamSort == "All" ? "active":""}`}
                                        onClick={()=>{handleSortTeam("All")}}
                                    >
                                            All
                                    </p>
                                    {listTeam.map((item,index)=>
                                        <p 
                                            className={`teamDetail ${item.team == teamSort ? "active" : ""}`}
                                            key={index}
                                            onClick={()=>{handleSortTeam(item.team)}}
                                        >
                                            {item.team}
                                        </p>
                                    )}
                                </div>
                            </div>
                            <div className="titleDetail">
                                <p>Images</p>
                            </div>
                        </div>
                    </div>
                    <div className="showCharacter">
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
            {isDelayFormAdmin && 
                <FormAdmin_Hook 
                    isRenderFormAdmin={isRenderFormAdmin}
                />}
            {isRenderNoti && <Notification_Hook/>}
            {isLoading &&<Loading/>}
        </div>
    )
}
