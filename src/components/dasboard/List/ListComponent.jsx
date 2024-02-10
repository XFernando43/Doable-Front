import TitleComponent from "../../commons/Title/TitleComponent"
import React from 'react';
import OptionsComponent from "../Options/OptionsComponent";
import ListItemComponent from "../LisItem/ListItemComponent";
import SelectOptionsComponent from "../Options/selectOptions/SelectOptionsComponent";
import './List.style.css';

export default function ListComponent({title, _id}){
    const [optionActive, SetOptionActive] = React.useState(false);
    const [CardArray, SetCardArray] = React.useState([]);

    async function getCards() {
        const token = localStorage.getItem('token');
        // const API = `https://bordeable-api.onrender.com/cards/getCards/10`;
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
            console.log(data);
            
            SetCardArray(data.cards);

            console.log(CardArray);
          } 
        } catch (error) {
          console.error("Error: ", error);
        }
    }

    function ShowOptionsHandle(){
        SetOptionActive(!optionActive);
    }

    React.useEffect(()=>{
        getCards();
    },[])

    return(
        <div className="list_container">
            <div className="list_header">
                <TitleComponent text={title} />
                <OptionsComponent click={ShowOptionsHandle}/>
                {optionActive && (
                    <SelectOptionsComponent type="list"/>
                )}
            </div>
            {
               CardArray.map((card) => (
                <ListItemComponent key={card.id} text={card.card_title} />
              ))
            }

        </div>
    )
}