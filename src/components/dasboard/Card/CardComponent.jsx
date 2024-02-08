import './Card.style.css';
import LabelComponent from '../../commons/Label/LabelComponent';
import ButtonComponent from '../../commons/Button/ButtonComponent';
import TitleComponent from '../../commons/Title/TitleComponent';

export default function CardComponent({ value ,title}){
    return(
        <div className='card_container'>
            {value === '1' ? (
                <>      
                    <div className='input_container'>
                        <LabelComponent text="Board Title" size="sm" htmlFor="text_input" />
                        <textarea className='text_area' id='text_input' />
                    </div>

                    <div className='footer_card'>
                    <p>color</p>
                    <ButtonComponent text="Create" type="Primary" />
                    </div>
                </>
            )
             :
                <TitleComponent text={title} size="smm"/>
             
            }              
                
        </div>
    )
}