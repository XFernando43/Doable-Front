import './SubTitle.style.css'
import ButtonComponent from '../../commons/Button/ButtonComponent';
import InputFieldComponent from '../../commons/InputFIelds/FieldComponent';
import React from 'react';
import ColorModal from '../ColorModal/ColorModal';
import { useParams } from 'react-router-dom';
export default function SubTitleComponent({text,size, change}){
    const classValue = `SubTitle ${size}`;
    const [BoardTitle, SetBoardTitle] = React.useState('');
    const [Color, SetColor] = React.useState('');

    const {id} = useParams();

    async function editBoard(){
        // const url = `https://bordeable-api.onrender.com/cards/${_id}`;
        const url = `https://bordeable-api.onrender.com/board/${id}`;
        const token = localStorage.getItem('token');

        const data={
            "name":BoardTitle,
            "color":Color
        }

        try {
            const response = await fetch(url, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(data)
            });
            if (response.ok) {
                const data = await response.json();
                console.log('card update successfully:', data);
            } else {
                console.error('Failed to update card:', response.statusText);
            }
        } catch (error) {
            console.error('Error update card:', error);
        } 
    }

    
    return (
        <>
        {
            change === true && (
                <div className='BoardSubtitle_container'>
                    <InputFieldComponent idFor="Board Title" inputHandler={(event)=> {SetBoardTitle(event.target.value)}} type={"text"}/>
                    <ButtonComponent text ="Edit Card" type = "Primary" _function = {editBoard} />
                    <ColorModal Color = {Color} SetColor = {SetColor} />
                </div>

            )
        }
        {
            change === false && (
                <h1 className={classValue}>{text}</h1>

            )
        }
        </>
    );
}
