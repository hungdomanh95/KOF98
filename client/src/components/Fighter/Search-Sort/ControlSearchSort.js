import React ,{useEffect, useState,useMemo}from 'react'

export default function ControlSearch(props) {
    // - Data from component AdminFighter_Hook
    const {newListCharacter,setListCharater,teamSort,nameSort} = props;
    // - Variable to take the value from input searchCharacter
    const [searchText,setSearchText] = useState("");
    //set data for searchText when the value in input change
    const handleOnChange= (e) => {
        setSearchText(e.target.value)
    }
    // - Function listSearchCharacter , 
    //   when searchText change this function run and return the new list character
    // - useMemo nhận về 2 giá trị bên trong là hàm thực thi , và giá trị thay đổi để chạy hàm thực thi 
    // - useMemo nguyên lí giống với useEffect ở dạng ComponentDidUpdate , 
    //   nhưng useMemo sau khi thực thi trả về 1 giá trị bên ngoài hàm
    // - Hàm toLowerCase chuyển đổi tất cả các kí tự về chữ thưởng
    const listSearchCharacter =  useMemo(()=>{
        if(searchText)
        return newListCharacter.filter((item)=>{
            let nameLower = item.name.toLowerCase()  
            let searchLower = searchText.toLowerCase()
            return nameLower.indexOf(searchLower) !== -1
        })
        else return newListCharacter
    },[searchText,newListCharacter])    
    console.log(nameSort)
    // const listSearchAndSortName = useMemo(()=>{
    //     let indexSort  = 0;
    //     if(nameSort === "A-Z") indexSort = -1;
    //     if(nameSort === "Z-A") indexSort = 1;
    //     if(nameSort ==="Default") indexSort = 0;
    //     return listSearchCharacter.sort((a,b)=>{
    //         console.log(indexSort)
    //         if(a.name.toLowerCase()<b.name.toLowerCase()) return indexSort*(-1)
    //         else if(a.name.toLowerCase()>b.name.toLowerCase()) return indexSort*(1)
    //         else return indexSort*0
    //     })
    // },[nameSort,listSearchCharacter])
    const listSearchSortNameAndTeam = useMemo(()=>{
        if(teamSort !== "All")
            return listSearchCharacter.filter((item)=>{
                return item.team === teamSort
            })
        else return listSearchCharacter
    },[teamSort,listSearchCharacter,newListCharacter])
    //Update newlist after search , sort name and sort team
    useEffect(()=>{
        setListCharater(listSearchSortNameAndTeam)
    },[searchText,nameSort,teamSort,newListCharacter])
    //Clear data in input searchCharacter
    const handleButtonClear = () => {
        setSearchText("")
    }
    return (
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
    )
}
