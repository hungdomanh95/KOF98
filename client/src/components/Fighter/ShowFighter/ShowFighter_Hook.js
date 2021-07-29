import React from 'react';
import {listTeam} from "../Listdata";
import ShowTeam_Hook from "./ShowTeam_Hook";
export default function ShowFighter_Hook() {
    return (
        <div className="showFighter">
            <div className="showList">
                {listTeam.map((item,index)=>
                <ShowTeam_Hook
                        key={index}
                        team={item.team}
                    />
                )}
            </div>
        </div>
    )
}
