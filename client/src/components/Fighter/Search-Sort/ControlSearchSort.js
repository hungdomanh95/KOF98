import React ,{useEffect, useState,useMemo}from 'react'
import { listTeam,listSortName } from '../Listdata';

export default function ControlSearch(props) {
    // - Data from component AdminFighter_Hook
    const {newListCharacter,setListCharater} = props;
    // - Variable to take the value from input searchCharacter
    const [searchText,setSearchText] = useState("");
    const [nameSelect,setNameSelect] = useState("A-Z");
    const [teamSelect,setTeamSelect] = useState("All")
    //set data for searchText when the value in input change
    const handleOnChange= (e) => {setSearchText(e.target.value)}
    const handleOnChangeName = (e) => {setNameSelect(e.target.value)}
    const handleOnChangeTeam = (e) => {setTeamSelect(e.target.value)}
    // - Function listSearchCharacter , 
    //   when searchText change this function run and return the new list character
    // - useMemo nhận về 2 giá trị bên trong là hàm thực thi , và giá trị thay đổi để chạy hàm thực thi 
    // - useMemo nguyên lí giống với useEffect ở dạng ComponentDidUpdate , 
    //   nhưng useMemo sau khi thực thi trả về 1 giá trị bên ngoài hàm
    // - Hàm toLowerCase chuyển đổi tất cả các kí tự về chữ thưởng
    const listSearchCharacter =  useMemo(()=>{
        if(searchText.length>0)
        return newListCharacter.filter((item)=>{
            let nameLower = item.name.toLowerCase()  
            let searchLower = searchText.toLowerCase()
            return nameLower.indexOf(searchLower) !== -1
        })
        else return newListCharacter
    },[searchText,newListCharacter])
    const ListSortName = useMemo(()=>{
        let newListSearch = [...listSearchCharacter]
        return newListSearch.sort((a,b)=>{
            let index = (nameSelect === "A-Z" ? 1 : -1);
            const nameA = a.name.toLowerCase();
            const nameB = b.name.toLowerCase();
            return index*nameA.localeCompare(nameB)
        })
    },[nameSelect,listSearchCharacter])    
    const listSortTeam = useMemo(()=>{
        if(teamSelect !== "All")
            return ListSortName.filter((item)=>{
                return item.team === teamSelect
            })
        else return ListSortName
    },[teamSelect,ListSortName])
    //Update newlist after search , sort name and sort team
    useEffect(()=>{
        setListCharater(listSortTeam)
    },[searchText,nameSelect,teamSelect,newListCharacter])
    //Clear data in input searchCharacter
    const handleButtonClear = () => {
        setSearchText("")
    }
    return (
        <div className="searchSortCharacter">
            <div className="searchCharacter">
                <input 
                    type="text" 
                    value={searchText}
                    onChange={handleOnChange}
                    placeholder="Search . . ."
                />
                <button 
                    className="btn btn-success"
                    onClick={handleButtonClear}
                    >
                    CLEAR
                </button>
            </div>
            <div className="sortCharacter">
                <span>Sort Character By</span>
                <select name="nameSelect" id="nameSelect" onChange={handleOnChangeName}>
                    {listSortName.map((item,index)=>
                        <option value={item.sort} key={index}>{item.sort}</option>
                    )}
                </select>
                <span>And</span>
                <select name="teamSelect" id="teamSelect" onChange={handleOnChangeTeam}>
                        <option value="All">All</option>
                    {listTeam.map((item,index)=>
                        <option value={item.team} key={index}>{item.team}</option>
                    )}
                </select>
            </div>
        </div>
    )
}
