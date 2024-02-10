import './CreateListForm.style.css';
// import TitleComponent from "../../commons/Title/TitleComponent"
// import React from 'react';
// import OptionsComponent from "../Options/OptionsComponent";
// import ListItemComponent from "../LisItem/ListItemComponent";
// import SelectOptionsComponent from "../Options/selectOptions/SelectOptionsComponent";
import ButtonComponent from "../../commons/Button/ButtonComponent";
import InputFieldComponent from "../../commons/InputFIelds/FieldComponent";
import React from 'react';
import { useParams } from 'react-router-dom';
export default function CreateListForm(){
    const [Title, SetTitle] = React.useState('');
    const {id} = useParams();

    async function PostList(){
      const url = `https://bordeable-api.onrender.com/lists/${id}`;
      const token = localStorage.getItem('token');
    
      const ListData = {
        list_name: Title,
      };
    
      try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(ListData)
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
    }

    function onHandleTitle(event){
      SetTitle(event.target.value);
    }
   
    return (      
      <div className="CreateListContainer">
        <header className="CreateListContainer_header">
          <InputFieldComponent idFor="List Title" type="text" inputHandler = {onHandleTitle} />
        </header>
        <ButtonComponent text="Create New List" type="Primary" _function={PostList}/>
      </div>
    )
}