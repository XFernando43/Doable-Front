import React from "react";
import InputFieldComponent from "../../commons/InputFIelds/FieldComponent";
import ButtonComponent from "../../commons/Button/ButtonComponent";
import TitleComponent from "../../commons/Title/TitleComponent";
import OptionsComponent from "../Options/OptionsComponent";
import SelectOptionsComponent from "../Options/selectOptions/SelectOptionsComponent";
import './ListHeader.style.css'

export default function ListHeaderComponent({_title,__id}){
    const [EditListTitle, setEditListTitle] = React.useState(false);
    const [optionActive, SetOptionActive] = React.useState(false);
    const [ListTitle, setListTitle] = React.useState('');

    async function EditListTitleHandler(){
        const url = `https://bordeable-api.onrender.com/lists/${__id}`;
        const token = localStorage.getItem('token');
  
        const data = {
            "list_name": ListTitle, 
            "order": "1" 
        };
  
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
                const responseData = await response.json();
                console.log('List updated successfully:', responseData);
                editListTitleActive();
            } else {
                console.error('Failed to update list:', response.statusText);
            }
        } catch (error) {
            console.error('Error updating list:', error);
        }
  
      }

    function ShowOptionsHandle(){
        SetOptionActive(!optionActive);
    }

    function editListTitleActive(){
        setEditListTitle(!EditListTitle);
    }

    async function deleteList(){
        const url = `https://bordeable-api.onrender.com/lists/${__id}`;
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
        <div className="list_header">
            {
            EditListTitle === true && (
                <div className="editListTitle_container">
                <InputFieldComponent idFor="Card Title" inputHandler={(event)=>{setListTitle(event.target.value)}} type="text" />
                <ButtonComponent text="Edit List" type="Primary" _function={EditListTitleHandler} />
                </div>
            )
            }
            {
            EditListTitle === false && (
                <TitleComponent text={_title} />

            )
            }
            <OptionsComponent click={ShowOptionsHandle}/>
                {optionActive && (
            <SelectOptionsComponent type="list" _function={deleteList} _function2={editListTitleActive}/>
        )}
        </div>

    );
}