import React, { useEffect,useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { getCharacter,addCharacter} from "../../redux/action/characterAction";
const Fighter = () => {
    const dispatch = useDispatch()
    const { itemsCharacter } = useSelector((state) => state.characterReducer);
    const [introCharacter, setIntroCharacter] = useState("")
    useEffect(()=>{
      dispatch(getCharacter())
    },[])

    const inputIntro =(e) =>{
        console.log(e.target.value);
        setIntroCharacter(e.target.value)
    }
    const _addCharacter = () =>{
        dispatch(addCharacter(introCharacter))
    }
    return (
        <div className='fighter'>
            <input onChange={(e)=>inputIntro(e)} />
            <button onClick={_addCharacter} > ADD CHARACTER </button>
        </div>
    )
}

export default Fighter
