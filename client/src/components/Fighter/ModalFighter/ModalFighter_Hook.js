import React, { useEffect } from 'react';
import {useSelector,useDispatch} from "react-redux";
import {handleInforModal} from "../../../redux/action/characterAction";
export default function ModalFighterHook(props) {
    const dispatch = useDispatch();
    //Data from store 
    const {paramModal} = useSelector(state => state.characterReducer);
    const {isRenderModal} = props;
    const { name,
            images__card,
            intro,fate,
            equipment,
            infor,
            soul__energy,
            hidden__charm,
            passive1,
            passive2,
            thunderElement,
            waterElement,
            skill,
            ultimate,
            strongest,
            weakness,
            } = paramModal;
    //Function close modal
    const handleCloseModal = () => {
        let param = {
            isRenderModal:false,
            data:paramModal
        }
        dispatch(handleInforModal(param))
    };
    //Close modal when press ESC button on the keypoard
    useEffect(()=>{
        document.addEventListener("keyup",(e)=>{
            if(e.keyCode===27) handleCloseModal()
        })
    },[])
    return (
        <div className="modalFighter">
            <div className={`modalContent ${isRenderModal ? "show" : ""}`}>
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
                                <h5>Trang Bị :</h5>
                                <div className="equipmentContent">
                                {equipment.map((item,index)=>
                                    <img src={item} alt="" key={index}/>
                                )}
                                </div>
                            </div>
                            <div className="characterSoulForce">
                                <h5>Hồn Lực :</h5>
                                <div className="soulForceContent">
                                {soul__energy.map((item,index)=>
                                    <img src={item} alt="" key={index}/> 
                                )}
                                </div>
                            </div>
                            <div className="characterHiddenFate">
                                <h5>Duyên Ngầm :</h5>
                                <div className="hiddenFateContent">
                                {hidden__charm.map((item,index)=>
                                    <img src={item} alt="" key={index}/>
                                )}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="characterDetail">
                        <div className="detailInfor">
                            <div className="detailItems">
                                <h5>*Nội tại 1: {passive1.title}</h5>
                                {passive1.content.map((item,index)=>
                                    <p key={index}>_{item}</p>
                                )}
                            </div>
                            <div className="detailItems">
                                <h5>*Nội tại 2: {passive2.title}</h5>
                                {passive2.content.map((item,index)=>
                                    <p key={index}>_{item}</p>
                                )}
                            </div>
                        </div>
                        <div className="detailInfor">
                            <div className="detailItems">
                                <h5>*Nhị môn :</h5>
                                {thunderElement.map((item,index)=>
                                    <p key={index}>_{item}</p>
                                )}
                            </div>
                            <div className="detailItems">
                                <h5>*Tứ Môn :</h5>
                                {waterElement.map((item,index)=>
                                    <p key={index}>_{item}</p>
                                )}
                            </div>
                        </div>
                        <div className="detailInfor">
                            <div className="detailItems">
                                <h5>*Độc Chiêu : {skill.title}</h5>
                                {skill.content.map((item,index)=>
                                    <p key={index}>_{item}</p>
                                )}
                            </div>
                            <div className="detailItems">
                                <h5>*Tuyệt Kĩ : {ultimate.title}</h5>
                                {ultimate.content.map((item,index)=>
                                    <p key={index}>_{item}</p>
                                )}
                            </div>
                        </div>
                        <div className="detailInfor">
                            <div className="detailItems">
                                <h5>*Ưu Điểm :</h5>
                                {strongest.map((item,index)=>
                                    <p key={index}>_{item}</p>
                                )}
                            </div>
                            <div className="detailItems">
                                <h5>*Nhược Điểm :</h5>
                                {weakness.map((item,index)=>
                                    <p key={index}>_{item}</p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modalFooter"></div>
            </div>
        </div>
    )
}
