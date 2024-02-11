import TitleComponent from "../../commons/Title/TitleComponent";
import LabelComponent from "../../commons/Label/LabelComponent";
import React from "react";
import './Select.style.css';

export default function SelectComponent(){
    const [selectedOptions, setSelectedOption] = React.useState('');
    
    const handleChange = (event) => {
        setSelectedOption(event.target.value);
        console.log(selectedOptions);
        console.log(typeof(selectedOptions));
        if(selectedOptions == 1){
            console.log("order by fecha")
        }
        if(selectedOptions == 2){
            console.log("order by asc")
        }
        if(selectedOptions == 1){
            console.log("order by desc")
        }
    };

    return(
        <div className="select_container">
            <TitleComponent text="My Boards" size="md"/>
            <div className="select_subcontainer">
                <LabelComponent text="Sort By" size="sm" htmlFor="orderBy"/>
                <select className="selector" name="orderBy" id="orderBy"  value={selectedOptions} onChange={handleChange}>
                    <option value = '1'>Created Date</option>
                    <option value = '2'>Order Desc</option>
                    <option value = '3'>Order Asc</option>
                </select>
            </div>
        </div>
    )
}