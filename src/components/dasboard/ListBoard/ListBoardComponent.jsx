import React from 'react';
import BoardComponent from '../Board/BoardComponent';
import './ListBoard.style.css';
// import { useNavigate } from 'react-router-dom';
import { LoginContext } from '../../../contexts/ContextLogin';

export default function ListBoardComponent(){
    const [Boards,setBoards] = React.useState([]);
    const [refres, setrefresh] = React.useState(false);
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
          }
        } catch (error) {
          console.error("Error: ", error);
        }
    }

    React.useEffect(()=>{
        isLogin_To_Redirect("login","false");
        getBoards();
        console.log(Boards);
    },[refres]);


    return (
        <div className='listBoard_container'>
            <BoardComponent value="1"/>
            {
              Boards.map(board => (
                  <BoardComponent title={board.board_name} color={board.board_color} key={board.board_id} _id={board.board_id}/>
              ))
            }
                   

        </div>
    )
}