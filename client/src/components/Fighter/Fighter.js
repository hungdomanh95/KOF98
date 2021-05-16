import React, { Component } from 'react';
import {connect} from "react-redux";
import {getCharacter,updateInforCharacter} from "./../../redux/action/characterAction";
import {listImage,listTeam} from "./Listdata";
import Banner from "./Banner/Banner";
import ShowFighter from "./ShowFighter/ShowFighter";
import ModalFighter from './ModalFighter/ModalFighter';
import AdminFighter from "./AdminFighter/AdminFighter";
 class Fighter extends Component {
     state={
        listCharacter:[],
        isRenderModal:false,
        characterInfor:{},}
    componentDidMount=()=>{
        this.props.getListCharacter();
    }
    componentDidUpdate=(prevProps)=>{
        if( this.props.characterItems 
            && 
            this.props.characterItems 
            !== 
            prevProps.characterItems ){
         let newListCharacter = this.props.characterItems.map((item,index)=>{
             let characterImg = listImage.find((img)=>{
                 return (item.id===img.id)
                })
                return {...item,...characterImg}
            })
        this.props.updateNewListCharacter(newListCharacter)
        this.setState({
            listCharacter:newListCharacter
        })
    }
    }
    handleCharacter=(character)=>{
        this.setState({
            characterInfor:character,
            isRenderModal:true
        })
    }
    onCloseModal=()=>{
        this.setState({
            isRenderModal:false
        })
    }
    render() {
        return (
            <>
                <Banner />
                <ShowFighter 
                    team={listTeam} 
                    listCharacter={this.state.listCharacter} 
                    handleCharacter={this.handleCharacter}/>
                <ModalFighter
                    characterInfor={this.state.characterInfor}
                    isRenderModal={this.state.isRenderModal}
                    onCloseModal={this.onCloseModal}/>
                {this.props.isRenderAdFighter && <AdminFighter />}
            </>
        )
    }
}
const mapStateToProps=(state)=>{
    return{
    characterItems:state.characterReducer.characterItems,
    isRenderAdFighter: state.characterReducer.isRenderAdFighter}
};
const mapDispacthToProps=(dispacth)=>{
    return{
        getListCharacter:()=>{
            dispacth(getCharacter())
        },
        updateNewListCharacter:(data)=>{
            dispacth(updateInforCharacter(data))
        }
    }
}
export default connect(mapStateToProps,mapDispacthToProps)(Fighter)
