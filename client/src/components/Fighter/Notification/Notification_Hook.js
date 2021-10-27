import React, { useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { handleParamNoti,handleParamForm,addCharacter,deleteCharacter,editCharacter } from '../../../redux/action/characterAction';
export default function Notification_Hook() {
    const dispatch = useDispatch();
    // Data from store
    const { paramNoti,
            paramForm,
            isAddSuccess,
            isDeleteSuccess,
            isEditSuccess } = useSelector((state)=>state.characterReducer);
    const {data,type} = paramNoti;
    //Check type nhận được để xác định chức năng ADD ,  EDIT hay DELETE
    const handleButtonYes = ()=> {
        let param = {
            isRenderNoti : false,
            isRenderLoading : true,
        }
        {type === "ADD_CHARACTER" && dispatch(addCharacter(data))}
        {type === "DELETE_CHARACTER" && dispatch(deleteCharacter(data))}
        {type === "EDIT_CHARACTER" && dispatch(editCharacter(data.id,data))}
        dispatch(handleParamNoti(param))
        dispatch(handleParamForm({isRenderForm:false,data:paramForm}))
    }
    // Close Notification_Hook
    const handleButtonNo = () => {
        let param = {
            isRenderNoti : false,
            isAddSuccess : false,
            isDeleteSuccess :false,
            isEditSuccess : false
        }
        dispatch(handleParamNoti(param))
    }
    // Check xem giá trị trả về từ server đã thực thi thành công , sau đó update lại data mới
    // useEffect(()=>{
    //     if(isAddSuccess || isDeleteSuccess || isEditSuccess) 
    //         dispatch(getCharacter())
    // },[isAddSuccess,isDeleteSuccess,isEditSuccess])
    return (
        <div className="notification">
            <div className="notiContent">
                <div className="notiHeader"></div>
                <div className="notiBody">
                    {type==="ADD_CHARACTER" && !isAddSuccess && 
                        <h5>ARE YOU SURE TO ADD CHARACTER ?</h5>
                    }
                    {isAddSuccess && 
                        <h5>ADD CHARACTER SUCCESS !</h5>
                    }
                    {type==="DELETE_CHARACTER" && !isDeleteSuccess && 
                        <h5>ARE YOU SURE TO DELETE CHARACTER ?</h5>
                    }
                    {isDeleteSuccess && 
                        <h5>DELETE CHARACTER SUCCESS !</h5>
                    }
                    {type==="EDIT_CHARACTER" && !isEditSuccess && 
                        <h5>ARE YOU SURE TO EDIT CHARACTER ? </h5>
                    }
                    {isEditSuccess && 
                        <h5>EDIT CHARACTER SUCCESS !</h5>
                    }
                </div>
                <div className="notiFooter">
                    {!isAddSuccess && !isDeleteSuccess && !isEditSuccess &&
                        <button 
                            className="btn btn-success"
                            onClick={handleButtonYes}
                        >
                            YES
                        </button>}
                    <button 
                        className="btn btn-secondary"
                        onClick={handleButtonNo}
                    >
                        {isAddSuccess || isDeleteSuccess || isEditSuccess ? "CONFIRM" : "NO"}
                    </button>
                </div>
            </div>
        </div>
    )
}
