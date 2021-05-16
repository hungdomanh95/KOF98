import React, { Component } from 'react'

export default class ModalFighter extends Component {
    componentDidMount = () => {
        document.addEventListener("keyup", (e) => {
            if (e.keyCode === 27) {
                this.props.onCloseModal()
            }
        })
    }
    componentDidUpdate = () => {
        if(this.props.isRenderModal) 
            document.body.style.overflowY="hidden"
        else document.body.style.overflowY="scroll"

    }
    render() {
        const { isRenderModal, characterInfor } = this.props;
        const { images__card,
                intro,
                fate,
                infor,
                equipment,
                soul__energy,
                hidden__charm,
                passive2,
                skill,
                thunderElement,
                ultimate,
                waterElement,
                passive1} = characterInfor
                
        return (
            <div className={`modal__Fighter ${isRenderModal ? "show" : ""}`}>
                <div className="modal__Mask" 
                    onClick={this.props.onCloseModal}>
                </div>
                <div className="modal__Content">
                    <div className="modal__Header">
                        <img src={images__card} alt="" />
                        <div className="infor__Character">
                            <h5>Giới Thiệu Nhân Vật : </h5>
                            <p>{characterInfor && intro}</p>
                            <h5>Duyên : </h5>
                            {fate && fate.map((item) => {
                                return <p>*{item}</p>
                            })}
                        </div>
                        <div className="infor__Character">
                            <div className="infor__Detail">
                                <h5>Thông tin cơ bản : </h5>
                                {infor && infor.map((item) => {
                                    return <p>*{item}</p>
                                })}
                            </div>
                            <div className="infor__Detail">
                                <h5>Trang Bị : </h5>
                                {equipment && equipment.map((item) => {
                                    return <img src={item} alt="" />
                                })}
                            </div>
                            <div className="infor__Detail">
                                <h5>Hồn Lực : </h5>
                                {soul__energy && soul__energy.map((item) => {
                                    return <img src={item} alt="" />
                                })}
                            </div>
                            <div className="infor__Detail">
                                <h5>Duyên Ngầm : </h5>
                                {hidden__charm && hidden__charm.map((item) => {
                                    return <img src={item} alt="" />
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="modal__Body">
                        <div className="descrip__Character">
                            <div className="descrip__Detail">
                                <h5>*Nội tại 2 : {passive2 && passive2.title}</h5>
                                {passive2 && passive2.content.map((item) => {
                                    return <p>_{item}</p>
                                })}
                            </div>
                            <div className="descrip__Detail">
                                <h5>*Nhị Môn : </h5>
                                {passive2 && passive2.content.map((item) => {
                                    return <p>_{item}</p>
                                })}
                            </div>
                        </div>
                        <div className="descrip__Character">
                            <div className="descrip__Detail">
                                <h5>*Độc Chiêu : {skill && skill.title}</h5>
                                {skill && skill.content.map((item) => {
                                    return <p>_{item}</p>
                                })}
                            </div>
                            <div className="descrip__Detail">
                                <h5>*Tứ Môn : </h5>
                                <p>{thunderElement}</p>
                            </div>
                        </div>
                        <div className="descrip__Character">
                            <div className="descrip__Detail">
                                <h5>*Tuyệt kỹ : {ultimate && ultimate.title}</h5>
                                {ultimate && ultimate.content.map((item) => {
                                    return <p>_{item}</p>
                                })}
                            </div>
                            <div className="descrip__Detail">
                                <h5>*Lục Môn : </h5>
                                {waterElement && waterElement.map((item) => {
                                    return <p>_{item}</p>
                                })}
                            </div>
                            <div className="descrip__Detail">
                                <h5>*Thức tỉnh vũ khí : </h5>
                                {waterElement && waterElement.map((item) => {
                                    return <p>_{item}</p>
                                })}
                            </div>
                        </div>
                        <div className="descrip__Character">
                            <div className="descrip__Detail">
                                <h5>*Nội tại 1 : {passive1 && passive1.title}</h5>
                                <p>_{passive1 && passive1.content}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
