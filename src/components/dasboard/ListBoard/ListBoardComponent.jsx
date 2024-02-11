import BoardComponent from '../Board/BoardComponent';
import CreateBoardComponent from "../CreateBoardComponent/CreateBoardComponent";
import React from 'react';
import './ListBoard.style.css';

function ListBoardComponent({ Boards }) {
  return (
    <div className='listBoard_container'>
      <CreateBoardComponent />
      {
        Boards.map(board => (
          <BoardComponent _board={board} key={board.board_id} />
        ))
      }
    </div>
  );
}

export default React.memo(ListBoardComponent);
