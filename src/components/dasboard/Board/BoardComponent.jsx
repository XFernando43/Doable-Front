import TitleComponent from "../../commons/Title/TitleComponent";
import './Board.style.css';
import React from "react";
import { useNavigate } from "react-router-dom";

export default function BoardComponent({ _board}){

    const navigate = useNavigate();
    function navigateToList(){
        navigate(`/lists/${_board.board_id}`);
    }

    const Title_Color={
        background: _board.board_color, 
        // background: 'blue', 
    };

    React.useEffect(()=>{
        console.log(_board);
    },)

    return (
        <>
            

            {<button className="board_button" onClick={navigateToList}>
                <div className='card_container align-center board_created' style={Title_Color}>
                <TitleComponent text={_board.board_name} size="smm"/>
                </div>
            </button>
             }
        
        </>
    );
}