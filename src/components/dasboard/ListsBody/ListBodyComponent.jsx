import ListComponent from "../List/ListComponent"
import CreateListForm from "../CreateListForm/CreateListForm";
import TitleComponent from "../../commons/Title/TitleComponent";
import OptionsComponent from "../Options/OptionsComponent";
import SelectOptionsComponent from "../Options/selectOptions/SelectOptionsComponent";
import React from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom"
import './ListBody.style.css'
export default function ListBodyComponent(){
    const [optionActive, SetOptionActive] = React.useState(false);
    const [Listas, setListas] = React.useState([]);
    const navigate = useNavigate();

    const { id } = useParams();
    function ShowOptionsHandle(){
      SetOptionActive(!optionActive);
  }

    async function getListas() {
        const token = localStorage.getItem('token');
        const API = `https://bordeable-api.onrender.com/lists/getLists/${id}`;
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
            
            setListas(data.lists);

            console.log(Listas);
          } 
        } catch (error) {
          console.error("Error: ", error);
        }
    }

    async function deleteBoard(){
      const url = `https://bordeable-api.onrender.com/board/${id}`;
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
          console.log('List Board deleted successfully:', data);
          navigate('/dashboard');
        } else {
          console.error('Failed to delete Board:', response.statusText);
        }
      } catch (error) {
        console.error('Error deleting Board:', error);
      } 

      ShowOptionsHandle();
    }

    React.useEffect(()=>{
        getListas();
    },[id])

    return(
        <div className="lists_body_container">
          <div className="list_head_container">
            <TitleComponent text="My Boards title" size="md"/>
            <OptionsComponent click={ShowOptionsHandle} />
            {optionActive && (
                <SelectOptionsComponent type="item" _function={deleteBoard}/>
            )}
          </div>

          <div className="mainList_container">
              {
              Listas.map(lista => (
                <ListComponent title={lista.list_name} _id={lista.list_id} key={lista.list_id}/>
                ))
              }

            <CreateListForm title="List Title" _id="1" />
          </div>
        </div>
    )
}