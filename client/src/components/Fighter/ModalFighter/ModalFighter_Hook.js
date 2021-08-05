import React, { useEffect } from 'react';
import {useSelector,useDispatch} from "react-redux";
import {handleInforModal} from "../../../redux/action/characterAction";
export default function ModalFighterHook(props) {
    const dispatch = useDispatch();
    //Data from store 
    const {paramModal} = useSelector(state => state.characterReducer);
    const { name,images__card,intro,fate,equipment,infor,soul__energy,hidden__charm,passive1,passive2,thunderElement,
            waterElement,skill,ultimate,strongest,weakness} = paramModal;
    //Function close modal
    const handleCloseModal = () => {
        let param = {
            isRenderModal:false,
            data:paramModal
        }
        dispatch(handleInforModal(param))
    };
    const renderInforBasic = (title,infor,nameClass) => {
        if(infor.length > 0) {
            return (
                <>
                    <h5>{title}</h5>
                    <div className={nameClass}>
                        {infor.map((item,index)=>
                            <img key={index} src={item} alt="" />
                        )}
                    </div>
                </>
            )
        }
    }
    const renderInforDetail = (title,infor,nameClass) => {
        if(infor.content) 
            return (
            <div className={nameClass}>
                <h5>{title} : {infor.title}</h5>
                {infor.content.map((item,index)=>
                    <p key={index}>_{item}</p>
                )}
            </div>
            )
        else return (
            <div className={nameClass}>
                <h5>{title} :</h5>
                {infor.map((item,index)=>
                    <p key={index}>_{item}</p>
                )}
            </div>
        )
    }
        //Close modal when press ESC button on the keypoard
    useEffect(()=>{
        document.addEventListener("keyup",(e)=>{    
            console.log(e)
            if(e.code=="Escape") handleCloseModal()
        })
    },[])
    return (
        <div className="modalFighter">
            <div className={`modalContent ${props.isRenderModal ? "show" : ""}`}>
                <div className="modalHeader">
                    <i  className="fa fa-times-circle"
                        onClick={handleCloseModal}
                    >
                    </i>
                </div>
                <div className="modalBody">
                    <div className="characterName">
                        <h3>{name}</h3>
                    </div>
                    <div className="characterInfor">
                        <div className="characterImages">
                            <img src={images__card} alt="" />
                        </div>
                        <div className="characterIntro">
                            <h5>Giới thiệu nhân vật :</h5>
                            <p>{intro}</p>
                            <h5>Duyên :</h5>
                            {fate.map((item,index)=>
                                <p key={index}>*{item}</p>
                            )}
                        </div>
                        <div className="characterInforBasic">
                            <div className="inforBasic">
                                <h5>Thông Tin Cơ Bản :</h5>
                                {infor.map((item,index)=>
                                    <p key={index}>*{item}</p>
                                )}
                            </div>
                            <div className="characterEquipment">
                                {renderInforBasic("Trang Bị",equipment,"equipmentContent")}
                            </div>
                            <div className="characterSoulForce">
                                {renderInforBasic("Hồn Lực",soul__energy,"soulForceContent")}
                            </div>
                            <div className="characterHiddenFate">
                                {renderInforBasic("Duyên Ngầm",hidden__charm,"hiddenFateContent")}
                            </div>
                        </div>
                    </div>
                    <div className="characterDetail">
                        <div className="detailInfor">
                            {renderInforDetail("*Nội tại 1",passive1,"detailItems")}
                            {renderInforDetail("*Nội tại 2",passive2,"detailItems")}
                        </div>
                        <div className="detailInfor">
                            {renderInforDetail("*Nhị môn",thunderElement,"detailItems")}
                            {renderInforDetail("*Tứ Môn",waterElement,"detailItems")}
                        </div>
                        <div className="detailInfor">
                            {renderInforDetail("Độc Chiêu",skill,"detailItems")}
                            {renderInforDetail("Tuyệt Kĩ",ultimate,"detailItems")}
                        </div>
                        <div className="detailInfor">
                            {renderInforDetail("*Ưu điểm",strongest,"detailItems")}
                            {renderInforDetail("*Nhược điểm",weakness,"detailItems")}
                        </div>
                    </div>
                </div>
                <div className="modalFooter"></div>
            </div>
        </div>
    )
}
