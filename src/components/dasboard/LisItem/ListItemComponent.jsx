import React from 'react';
import OptionsComponent from '../Options/OptionsComponent';
import './ListItem.style.css';
import SelectOptionsComponent from '../Options/selectOptions/SelectOptionsComponent';
import InputFieldComponent from '../../commons/InputFIelds/FieldComponent';
import ButtonComponent from '../../commons/Button/ButtonComponent';

export default function ListItemComponent({text, _id}){
    const [optionActive, SetOptionActive] = React.useState(false);    
    const [InputEdit, setInputEdit] = React.useState(false);
    const [TitleEdited, setTitleEdited] = React.useState('');


    function activarInputEdit(){
      console.log("hila");
      setInputEdit(!InputEdit);
    }

    function ShowOptionsHandle(){
        SetOptionActive(!optionActive);
    }

    async function editCard(){
        const url = `https://bordeable-api.onrender.com/cards/${_id}`;
        const token = localStorage.getItem('token');

        const data={
            "card_title":TitleEdited,
        }

        try {
            const response = await fetch(url, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(data)
            });
            if (response.ok) {
                const data = await response.json();
                console.log('card update successfully:', data);
                activarInputEdit();
            } else {
                console.error('Failed to update card:', response.statusText);
            }
        } catch (error) {
            console.error('Error update card:', error);
        } 

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
        <>
            {
                InputEdit === true &&(
                    <div className='editCard_container'> 
                        <InputFieldComponent idFor="Card Title" inputHandler={(event)=> {setTitleEdited(event.target.value)}} type={"text"}/>
                        <ButtonComponent text ="Edit Card" type = "Primary" _function = {editCard} />

                    </div>
                )
            }

            {   InputEdit === false && (
                <div className="list_tiem_container">
                    <p>{text}</p>
                    <OptionsComponent click={ShowOptionsHandle}/>
                    {optionActive && (
                        <SelectOptionsComponent type="item" _function={deleteCard} _function2={activarInputEdit}/>
                    )}
                </div>
            )}    
        </>
    )
}


