import './Card.style.css';
import LabelComponent from '../../commons/Label/LabelComponent';

export default function CardComponent(){
    return(
        <div className='card_container'>
                <div className='Input_field'>
                    <LabelComponent text="Board Title" size="sm" htmlFor="text_input" />
                    <textarea className='text_area' id='text_input' />
                </div>
        </div>
    )
}