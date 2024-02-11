import React from 'react';
import ListItemComponent from "../LisItem/ListItemComponent";
import ButtonComponent from "../../commons/Button/ButtonComponent";
import InputFieldComponent from "../../commons/InputFIelds/FieldComponent";
import ListHeaderComponent from '../ListHeader/ListHeaderComponent';
import './List.style.css';
function ListComponent({title, _id}){
    const [ListItems, SetListItem] = React.useState([]);
    const [cardName, SetCardName] = React.useState('');
    const [inputActive, setInputActive] = React.useState(false); 

    function showInput(){
      setInputActive(!inputActive);
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
          SetListItem(data.cards);
          console.log(data);

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
            showInput();

            // const listAux = [...ListItems];
            // listAux.push({"card_id":,"card_title":cardName})
            // SetListItem(listAux);
  
          } else {
            console.error('Failed to create board:', response.statusText);
          }
      } catch (error) {
          console.error('Error creating board:', error);
      } 
    }



    function add(event){
      SetCardName(event.target.value);
    }

    React.useEffect(()=>{
      getCards();
    },[])

    return(

        <div className="list_container">
          <ListHeaderComponent _title={title} __id={_id}/>
          
          {
             ListItems.map((item) => (
              <ListItemComponent text={item.card_title} _id = {item.card_id} key={item.card_id}/>
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

export default React.memo(ListComponent);