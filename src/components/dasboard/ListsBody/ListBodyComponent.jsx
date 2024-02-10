import ListComponent from "../List/ListComponent"
import React from "react";
import './ListBody.style.css'
export default function ListBodyComponent(){
    const [Listas, setListas] = React.useState([]);

    async function getListas() {
    const token = localStorage.getItem('token');
        const API = `https://bordeable-api.onrender.com/lists/getLists/1`;
        // const API = `https://bordeable-api.onrender.com/lists/getLists/${id}`;
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

    React.useEffect(()=>{
        getListas();
    },[])

    return(
        <div className="lists_container">

            {
                Listas.map(lista => (
                     <ListComponent title={lista.list_name} key={lista.list_id}/>
                ))
            }
        </div>
    )
}