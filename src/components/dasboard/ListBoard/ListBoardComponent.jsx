import BoardComponent from '../Board/BoardComponent';
import './ListBoard.style.css';

export default function ListBoardComponent({Boards}){   

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