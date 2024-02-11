import './BoardMain.Style.css'
import SelectComponent from '../SelectOrder/SelectComponent'
import ListBoardComponent from '../ListBoard/ListBoardComponent'
import React from 'react';
import { LoginContext } from '../../../contexts/ContextLogin';
export default function BoardMainComponent(){
    const [refres, setrefresh] = React.useState(false);
    const [Boards,setBoards] = React.useState([]);
    const { isLogin_To_Redirect } = React.useContext(LoginContext);


    async function getBoards() {
        const token = localStorage.getItem('token');
        const API = 'https://bordeable-api.onrender.com/board/getBoards';
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
            setBoards(data.boards);
            setrefresh(!refres);
            console.log(Boards);
          }
        } catch (error) {
          console.error("Error: ", error);
        }
    }
    
    function sortBoards(orderBy) {
        let sortedBoards;
        switch (orderBy) {
          case "date":
            sortedBoards = [...Boards].sort((a, b) => {
              const dateA = new Date(a.createdat);
              const dateB = new Date(b.createdat);
              return dateA - dateB;
            });
            break;
          case "dateDesc":
            sortedBoards = [...Boards].sort((a, b) => {
              const dateA = new Date(a.createdat);
              const dateB = new Date(b.createdat);
              return dateB - dateA;
            });
            break;
          case "nameAsc":
            sortedBoards = [...Boards].sort((a, b) => {
              const nameA = a.board_name.toLowerCase();
              const nameB = b.board_name.toLowerCase();
              if (nameA < nameB) return -1;
              if (nameA > nameB) return 1;
              return 0;
            });
            break;
          case "nameDesc":
            sortedBoards = [...Boards].sort((a, b) => {
              const nameA = a.board_name.toLowerCase();
              const nameB = b.board_name.toLowerCase();
              if (nameA < nameB) return 1;
              if (nameA > nameB) return -1;
              return 0;
            });
            break;
          default:
            sortedBoards = [...Boards];
        }
        setBoards(sortedBoards);
    }

    React.useEffect(()=>{
        isLogin_To_Redirect("login","false");
        getBoards();
    },[]);


    return (
        <div className="Boardmain_content">
            <SelectComponent orderBy={sortBoards}/>
            <ListBoardComponent Boards={Boards}/>  
        </div>
    )
}