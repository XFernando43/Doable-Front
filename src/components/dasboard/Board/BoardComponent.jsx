import LabelComponent from "../../commons/Label/LabelComponent";
import ButtonComponent from "../../commons/Button/ButtonComponent";
import TitleComponent from "../../commons/Title/TitleComponent";
import './Board.style.css';

export default function BoardComponent({ value, title, _id }){
    return (
        <>
            {value === '1' ? (
                <div className='card_container board_to_create' id={_id}>
                    <div className='input_container'>
                        <LabelComponent text="Board Title" size="sm" htmlFor="text_input" />
                        <textarea className='text_area' id='text_input' />
                    </div>
                    <div className='footer_card'>
                        <p>color</p>
                        <ButtonComponent text="Create" type="Primary" />
                    </div>
                </div>
            ) : (
                <div className='card_container align-center board_created'>
                   <TitleComponent text={title} size="smm"/>
                </div>
            )}
        </>
    );
}