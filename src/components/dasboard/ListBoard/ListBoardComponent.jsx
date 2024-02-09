// import React from 'react';
import BoardComponent from '../Board/BoardComponent';
import './ListBoard.style.css';

export default function ListBoardComponent(){
    // const {Boards,setBoards} = React.useState([]);

    // async function getBoards() {
    //     const API = 'http://localhost:5500/board/getBoards';
    //     try {
    //       const response = await fetch(API, {
    //         method: "GET",
    //         headers: {
    //           "Content-type": "application/json"
    //         }
    //       });
    //       if (response.ok) {
    //         const data = await response.json();
    //         let array_notes = data.notes.map((note) => {
    //           return note;
    //         });
    //         setBoards(array_notes);
    //       }
    //     } catch (error) {
    //       console.error("Error: ", error);
    //     }
    // }

    // React.useEffect(()=>{
    //     getBoards();
    //     console.log(Boards);
    // });

    return (
        <div className='listBoard_container'>

    

            <BoardComponent value="1" title="HOLA"/>
            <BoardComponent title="My Board Title"/>
            <BoardComponent title="My Board Title"/>
            <BoardComponent title="My Board Title"/>
            <BoardComponent title="My Board Title"/>
            <BoardComponent title="My Board Title"/>
            <BoardComponent title="My Board Title"/>
            <BoardComponent title="My Board Title"/>
            <BoardComponent title="My Board Title"/>
            <BoardComponent title="My Board Title"/>
            <BoardComponent title="My Board Title"/>
            <BoardComponent title="My Board Title"/>
            <BoardComponent title="My Board Title"/>
            <BoardComponent title="My Board Title"/>
            
        </div>
    )
}