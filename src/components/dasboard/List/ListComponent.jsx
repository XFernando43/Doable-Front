import TitleComponent from "../../commons/Title/TitleComponent"
import './List.style.css';
import React from 'react';
import OptionsComponent from "../Options/OptionsComponent";
import ListItemComponent from "../LisItem/ListItemComponent";
import SelectOptionsComponent from "../Options/selectOptions/SelectOptionsComponent";
export default function ListComponent({title}){
    const [optionActive, SetOptionActive] = React.useState(false);

    function ShowOptionsHandle(){
        SetOptionActive(!optionActive);
    }

    return(
        <div className="list_container">
            <div className="list_header">
                <TitleComponent text={title} />
                <OptionsComponent click={ShowOptionsHandle}/>
                {optionActive && (
                    <SelectOptionsComponent type="list"/>
                )}
            </div>
            
            <ListItemComponent text="My Primera Tarjeta"/>
            <ListItemComponent text="My Primera Tarjeta"/>
            <ListItemComponent text="My Primera Tarjeta"/>
            <ListItemComponent text="My Primera Tarjeta"/>
            <ListItemComponent text="My Primera Tarjeta"/>
            <ListItemComponent text="My Primera Tarjeta"/>
        </div>
    )
}