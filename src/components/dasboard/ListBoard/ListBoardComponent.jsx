import React from 'react';
import BoardComponent from '../Board/BoardComponent';
import './ListBoard.style.css';

export default function ListBoardComponent(){
    const [Boards,setBoards] = React.useState([]);
    // const [BoardTitle, setBoardTitle] = React.useState();

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
            console.log(data.boards);
            console.log(data.boards[0].board_id)
            setBoards(data.boards);

          }
        } catch (error) {
          console.error("Error: ", error);
        }
    }

    React.useEffect(()=>{
        getBoards();
        console.log(Boards);
    });


    return (
        <div className='listBoard_container'>

    

            <BoardComponent value="1" title="HOLA"/>

            {
                Boards.map(board => (
                    <BoardComponent title={board.board_name} key={board.board_id}/>
                ))
            }
                   

        </div>
    )
}