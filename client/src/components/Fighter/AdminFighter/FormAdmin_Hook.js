import React,{ useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { handleParamForm,handleParamNoti } from '../../../redux/action/characterAction';
export default function FormAdmin_Hook(props) {
    const dispatch = useDispatch();
    // Data from store
    const {characterItems,paramForm} = useSelector((state)=>state.characterReducer);
    const {item,type} = paramForm;
    // Created object newCharacter for render form and take the value when add new character
    const [newCharacter,setNewCharacter] = useState({name:"",team:"",images:"",id:0});
    // Created object inforEdit for take the data from character and take infor on change when edit character 
    const [inforEdit,setInforEdit] = useState(item)
    // Close FormAdmin_Hook
    const handleButtonCancel=()=>{
        let param = {
            isRenderForm : false,
            data:paramForm
        }
        dispatch(handleParamForm(param))
    }
    // Function send data to store 
    const handleButtonAccept = () =>{
        const checkName = checkEmpty("name","Nội dung không được để trống","nameMessenger")
        const checkTeam = checkEmpty("team","Nội dung không được để trống","teamMessenger")
        const checkImages = checkEmpty("images","Nội dung không được để trống","imagesMessenger")
        let paramAdd={
            isRenderNoti:true,
            type:"ADD_CHARACTER",
            data:newCharacter
        }
        let paramEdit={
            isRenderNoti:true,
            type:"EDIT_CHARACTER",
            data:inforEdit
        }
        //Check type để xem chức năng là gữi thông tin nhân vật edit hay gửi thông tin nhân vật mới
        if( checkName && checkTeam && checkImages )
        dispatch(handleParamNoti(type==="EDIT" ? paramEdit : paramAdd)) 
    }
    // Function check input empty
    const checkEmpty = (idCheck,messenger,idMessenger) => {
        const getELEId = (id) => document.getElementById(id)
        if(getELEId(idCheck).value == ""){
            getELEId(idMessenger).innerHTML=messenger
            return false
        }
        else{
            getELEId(idMessenger).innerHTML=""
            return true
        }
    }
    // Set value for newCharacter or inforEdit when value in input change
    const handleOnChange=(e)=>{
        // Kiểm tra type là chức năng của form là add hay edit , để set giá trị cho biến newCharacter hay inforEdit
        if(type === "EDIT")
        setInforEdit({
            ...inforEdit,[e.target.name]:e.target.value
        })
        else
        setNewCharacter({
            ...newCharacter,[e.target.name]:e.target.value,
            id:characterItems.length + 10
        })
    }
    return (
        <div className="formAdmin">
            <div className={`formContent ${props.isRenderFormAdmin ? "show" : ""}`}>
                <div className="formHeader">
                    {type==="EDIT" ? <h3>EDIT CHARACTER</h3> : <h3>ADD CHARACTER</h3>}
                </div>
                <div className="formBody">
                    <form action="">
                        <label>
                            Name :
                            <input 
                                type="text" 
                                name="name"
                                value={type ==="EDIT" ? inforEdit.name : newCharacter.name}
                                onChange={handleOnChange}
                                id="name"
                            />
                            <span className="nameMessenger" id="nameMessenger"></span>
                        </label>
                        <label>
                            Team :
                            <input 
                                type="text" 
                                name="team"
                                value={type === "EDIT" ? inforEdit.team : newCharacter.team}
                                onChange={handleOnChange}
                                id="team"
                            />
                            <span className="teamMessenger" id="teamMessenger"></span>
                        </label>
                        <label>
                            Images :
                            <input 
                                type="text" 
                                name="images"
                                value={type === "EDIT" ? inforEdit.images : newCharacter.images}
                                onChange={handleOnChange}
                                id="images"
                            />
                            <span className="imagesMessenger" id="imagesMessenger"></span>
                        </label>
                    </form>
                </div>
                <div className="formFooter">
                    <button 
                        className="btn btn-success"
                        onClick={handleButtonAccept}
                    >
                        ACCEPT
                    </button>
                    <button 
                        className="btn btn-secondary"
                        onClick={handleButtonCancel}
                    >
                        CANCEL
                    </button>
                </div>
            </div>
        </div>
    )
}
