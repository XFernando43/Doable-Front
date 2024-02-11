import BoardComponent from '../Board/BoardComponent';
import CreateBoardComponent from "../CreateBoardComponent/CreateBoardComponent";
import './ListBoard.style.css';

export default function ListBoardComponent({Boards}){
  return (
      <div className='listBoard_container'>
        <CreateBoardComponent/>
        {
          Boards.map(board => (
            <BoardComponent _board={board} key={board.board_id}/>
          ))
        }
      </div>
  )
}