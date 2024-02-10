import React from 'react';
import OptionsComponent from '../Options/OptionsComponent';
import './ListItem.style.css';
import SelectOptionsComponent from '../Options/selectOptions/SelectOptionsComponent';
export default function ListItemComponent({text}){
    const [optionActive, SetOptionActive] = React.useState(false);

    function ShowOptionsHandle(){
        SetOptionActive(!optionActive);
    }

    return (
        <div className="list_tiem_container">
            <p>{text}</p>
            <OptionsComponent click={ShowOptionsHandle}/>
            {optionActive && (
                <SelectOptionsComponent type="item"/>
            )}
        </div>
    )
}