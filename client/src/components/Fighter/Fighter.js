import React, { Component } from 'react';
import {connect} from "react-redux";
import {getCharacter} from "./../../redux/action/characterAction";
import {listImage,listTeam} from "./Listdata";
import Banner from "./Banner/Banner";
import ShowFighter from "./ShowFighter/ShowFighter"
 class Fighter extends Component {
     state={
        listCharacter:[]
     }

    componentDidMount=()=>{
        this.props.saveListCharacter();
    }
    componentDidUpdate=(prevProps)=>{
        if(this.props.characterItems !== prevProps.characterItems){
         let newListCharacter= this.props.characterItems.map((item,index)=>{
             let characterImg = listImage.find((img)=>{
                 return (item.id===img.id)
                }
                )
                return {...item,...characterImg}
            })
        this.setState({
            listCharacter:newListCharacter
        })
    }
    }
    render() {
        return (
            <>
                <Banner />
                <ShowFighter team={listTeam} listCharacter={this.state.listCharacter}/>
            </>
        )
    }
}
const mapStateToProps=(state)=>{
    return{
    characterItems:state.characterReducer.characterItems}
    
};
const mapDispacthToProps=(dispacth)=>{
    return{
        saveListCharacter:()=>{
            dispacth(getCharacter())
        }
    }
}
export default connect(mapStateToProps,mapDispacthToProps)(Fighter)
