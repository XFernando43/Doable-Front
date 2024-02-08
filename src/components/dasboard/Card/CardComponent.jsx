import './Card.style.css';
import LabelComponent from '../../commons/Label/LabelComponent';
import ButtonComponent from '../../commons/Button/ButtonComponent';

export default function CardComponent(){
    return(
        <div className='card_container'>
                <div className='input_container'>
                    <LabelComponent text="Board Title" size="sm" htmlFor="text_input" />
                    <textarea className='text_area' id='text_input' />
                </div>

                <div className='footer_card'>
                    <p>color</p>
                    <ButtonComponent text="Create" type="Primary" />
                </div>
        </div>
    )
}