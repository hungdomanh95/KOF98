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
        if(this.props.isRenderModal) document.body.style.overflowY="hidden"
        else document.body.style.overflowY="scroll"

    }
    render() {
        const { isRenderModal, characterInfor } = this.props;
        return (
            <div className={`modal__Fighter ${isRenderModal ? "show" : ""}`}>
                <div className="modal__Mask" onClick={this.props.onCloseModal}></div>
                <div className="modal__Content">
                    <div className="modal__Header">
                        <img src={characterInfor.images__card} alt="" />
                        <div className="infor__Character">
                            <h5>Giới Thiệu Nhân Vật : </h5>
                            <p>{characterInfor && characterInfor.intro}</p>
                            <h5>Duyên : </h5>
                            {characterInfor.fate && characterInfor.fate.map((item) => {
                                return <p>*{item}</p>
                            })}
                        </div>
                        <div className="infor__Character">
                            <div className="infor__Detail">
                                <h5>Thông tin cơ bản : </h5>
                                {characterInfor.infor && characterInfor.infor.map((item) => {
                                    return <p>*{item}</p>
                                })}
                            </div>
                            <div className="infor__Detail">
                                <h5>Trang Bị : </h5>
                                {characterInfor.equipment && characterInfor.equipment.map((item) => {
                                    return <img src={item} alt="" />
                                })}
                            </div>
                            <div className="infor__Detail">
                                <h5>Hồn Lực : </h5>
                                {characterInfor.soul__energy && characterInfor.soul__energy.map((item) => {
                                    return <img src={item} alt="" />
                                })}
                            </div>
                            <div className="infor__Detail">
                                <h5>Duyên Ngầm : </h5>
                                {characterInfor.hidden__charm && characterInfor.hidden__charm.map((item) => {
                                    return <img src={item} alt="" />
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="modal__Body">
                        <div className="descrip__Character">
                            <div className="descrip__Detail">
                                <h5>*Nội tại 2 : {characterInfor.passive2 && characterInfor.passive2.title}</h5>
                                {characterInfor.passive2 && characterInfor.passive2.content.map((item) => {
                                    return <p>_{item}</p>
                                })}
                            </div>
                            <div className="descrip__Detail">
                                <h5>*Nhị Môn : </h5>
                                {characterInfor.passive2 && characterInfor.passive2.content.map((item) => {
                                    return <p>_{item}</p>
                                })}
                            </div>
                        </div>
                        <div className="descrip__Character">
                            <div className="descrip__Detail">
                                <h5>*Độc Chiêu : {characterInfor.skill && characterInfor.skill.title}</h5>
                                {characterInfor.skill && characterInfor.skill.content.map((item) => {
                                    return <p>_{item}</p>
                                })}
                            </div>
                            <div className="descrip__Detail">
                                <h5>*Tứ Môn : </h5>
                                <p>{characterInfor.thunderElement}</p>
                            </div>
                        </div>
                        <div className="descrip__Character">
                            <div className="descrip__Detail">
                                <h5>*Tuyệt kỹ : {characterInfor.ultimate && characterInfor.ultimate.title}</h5>
                                {characterInfor.ultimate && characterInfor.ultimate.content.map((item) => {
                                    return <p>_{item}</p>
                                })}
                            </div>
                            <div className="descrip__Detail">
                                <h5>*Lục Môn : </h5>
                                {characterInfor.waterElement && characterInfor.waterElement.map((item) => {
                                    return <p>_{item}</p>
                                })}
                            </div>
                            <div className="descrip__Detail">
                                <h5>*Thức tỉnh vũ khí : </h5>
                                {characterInfor.waterElement && characterInfor.waterElement.map((item) => {
                                    return <p>_{item}</p>
                                })}
                            </div>
                        </div>
                        <div className="descrip__Character">
                            <div className="descrip__Detail">
                                <h5>*Nội tại 1 : {characterInfor.passive1 && characterInfor.passive1.title}</h5>
                                <p>_{characterInfor.passive1 && characterInfor.passive1.content}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
