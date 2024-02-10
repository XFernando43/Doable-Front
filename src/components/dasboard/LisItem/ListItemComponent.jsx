import React from 'react';
import OptionsComponent from '../Options/OptionsComponent';
import './ListItem.style.css';
import SelectOptionsComponent from '../Options/selectOptions/SelectOptionsComponent';
export default function ListItemComponent({text, _id}){
    const [optionActive, SetOptionActive] = React.useState(false);

    function ShowOptionsHandle(){
        SetOptionActive(!optionActive);
    }

    async function deleteCard(){
        const url = `https://bordeable-api.onrender.com/cards/${_id}`;
        const token = localStorage.getItem('token');
        
        try {
            const response = await fetch(url, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });
            if (response.ok) {
                const data = await response.json();
                console.log('List created successfully:', data);
            } else {
                console.error('Failed to create list:', response.statusText);
            }
        } catch (error) {
            console.error('Error creating List:', error);
        } 

        ShowOptionsHandle();
    }

    return (
        <div className="list_tiem_container">
            <p>{text}</p>
            <OptionsComponent click={ShowOptionsHandle}/>
            {optionActive && (
                <SelectOptionsComponent type="item" _function={deleteCard}/>
            )}
        </div>
    )
}