import TitleComponent from "../../commons/Title/TitleComponent"
import React from 'react';
import OptionsComponent from "../Options/OptionsComponent";
import ListItemComponent from "../LisItem/ListItemComponent";
import SelectOptionsComponent from "../Options/selectOptions/SelectOptionsComponent";
import ButtonComponent from "../../commons/Button/ButtonComponent";
import InputFieldComponent from "../../commons/InputFIelds/FieldComponent";
import './List.style.css';



export default function ListComponent({title, _id}){
  const [CardArray, SetCardArray] = React.useState([]);
  const [cardName, SetCardName] = React.useState('');
  const [optionActive, SetOptionActive] = React.useState(false);
  const [inputActive, setInputActive] = React.useState(false); 
  
  const [EditListTitle, setEditListTitle] = React.useState(false);
  const [ListTitle, setListTitle] = React.useState('');

  function editListTitleActive(){
    setEditListTitle(!EditListTitle);
  }

  function showInput(){
    setInputActive(!inputActive);
  }

  async function EditListTitleHandler(){
    const url = `https://bordeable-api.onrender.com/lists/${_id}`;
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

  async function deleteList(){
    const url = `https://bordeable-api.onrender.com/lists/${_id}`;
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

    async function getCards() {
        const token = localStorage.getItem('token');
        const API = `https://bordeable-api.onrender.com/cards/getCards/${_id}`;
        try {
          const response = await fetch(API, {
            method: "GET",
            headers: {
              "Content-type": "application/json",
              "Authorization": `Bearer ${token}`
            }
          });
          if (response.ok) {
            const data = await response.json();
            SetCardArray(data.cards);

          } 
        } catch (error) {
          console.error("Error: ", error);
        }
    }

    async function PostCards(){
      const url = `https://bordeable-api.onrender.com/cards/${_id}`;
      const token = localStorage.getItem('token');
    
      const boardData = {
        card_title: cardName,
      };
    
      try {
          const response = await fetch(url, {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${token}`
              },
              body: JSON.stringify(boardData)
          });
  
          if (response.ok) {
              const data = await response.json();
              console.log('Card created successfully:', data);
              showInput()
          } else {
              console.error('Failed to create board:', response.statusText);
          }
      } catch (error) {
          console.error('Error creating board:', error);
      } 
    }

    function ShowOptionsHandle(){
      SetOptionActive(!optionActive);
    }

    function add(event){
      SetCardName(event.target.value);
    }

    React.useEffect(()=>{
      getCards();
    },[CardArray])

    return(
        <div className="list_container">
          <div className="list_header">

              

              {
                EditListTitle === true && (
                  <div className="editListTitle_container">
                    <InputFieldComponent idFor="Card Title" inputHandler={(event)=>{setListTitle(event.target.value)}} type="text" />
                    {/* <ButtonComponent text="Edit List" type="Primary" _function={} /> */}
                    <ButtonComponent text="Edit List" type="Primary" _function={EditListTitleHandler} />
                  </div>

                )
              }

              {
                EditListTitle === false && (
                  <TitleComponent text={title} />

                )
              }





              <OptionsComponent click={ShowOptionsHandle}/>
              {optionActive && (
                <SelectOptionsComponent type="list" _function={deleteList} _function2={editListTitleActive}/>
              )}
          </div>
          {
             CardArray.map((card) => (
              <ListItemComponent key={card.id} text={card.card_title} _id = {card.card_id}/>
            ))
          }

          {
            !inputActive && (
              <ButtonComponent text="+ Add Card" type="Secondary flex-start" _function={showInput}
              />
            )
          }
          {
            inputActive && (
              <div className="addCard_container">
                <InputFieldComponent idFor="Card Title" inputHandler={add} type="text" />
                <div className="button_options">
                  <ButtonComponent text="Add Card" type="Primary" _function={PostCards}/>
                  <ButtonComponent text="Cancel" type="Secondary" _function={showInput}/>
                </div>
              </div>
            )
          }
        </div>
    )
}

