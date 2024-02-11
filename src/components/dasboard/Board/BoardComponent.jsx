import LabelComponent from "../../commons/Label/LabelComponent";
import ButtonComponent from "../../commons/Button/ButtonComponent";
import TitleComponent from "../../commons/Title/TitleComponent";
import ColorModal from "../ColorModal/ColorModal";
import './Board.style.css';
import React from "react";
import { useNavigate } from "react-router-dom";

export default function BoardComponent({ value, title, _id, color }){
    const [Title,SetTitle] = React.useState('');
    const [Color, setColor] = React.useState('');
    const [PickerVisible, SetPickerVisible] = React.useState(false);
    const navigate = useNavigate();

    function handleSetPcikerVisible(){
        SetPickerVisible(!PickerVisible);
        console.log(Color);
    }

    function navigateToList(){
        navigate(`/lists/${_id}`);
    }

    async function PostNewBoard() {
        const url = 'https://bordeable-api.onrender.com/board';
        const token = localStorage.getItem('token');
    
        const boardData = {
            name: Title,
            color: Color,
        };
    
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(boardData)
            });
    
            if (response.ok) {
                const data = await response.json();
                console.log('Board created successfully:', data);
            } else {
                console.error('Failed to create board:', response.statusText);
            }
        } catch (error) {
            console.error('Error creating board:', error);
        }
    }

    const Board_Color={
        background: Color, 
    };

    const Title_Color={
        background: color, 
    };

    return (
        <>
            {value === '1' ? (
                <div className='card_container board_to_create' style={Board_Color} id={_id}>
                    
                    <div className='input_container'>
                        <LabelComponent text="Board Title" size="sm" htmlFor="text_input" />
                        <textarea className='text_area' id='text_input' onChange={(event)=>{SetTitle(event.target.value)}} />
                    </div>

                    <div className='footer_card'>
                        <div className="colorPicker_container">
                            <LabelComponent text="color" size="sm" htmlFor="ButtonColor"/>
                            <button className="ColorPicker_button" id="ButtonColor" onClick={handleSetPcikerVisible}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <circle cx="12" cy="12" r="11.5" fill="#E2E8F0" stroke="#525252"/>
                                </svg>
                            </button>
                            {
                                PickerVisible &&(
                                    <ColorModal Color={Color} SetColor={setColor}/>
                                )
                            }
                        </div>
                        <ButtonComponent text="Create" type="Primary" _function={PostNewBoard} />
                    </div>
                    
                </div>
            ) : (
                <button className="board_button" onClick={navigateToList}>
                    <div className='card_container align-center board_created' style={Title_Color}>
                    <TitleComponent text={title} size="smm"/>
                    </div>
                </button>
            )}
        </>
    );
}