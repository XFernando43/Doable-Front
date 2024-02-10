import React from 'react'
import ButtonComponent from '../../commons/Button/ButtonComponent'
import { useNavigate } from 'react-router-dom';
import './Form.style.css'
import InputFieldComponent from '../../commons/InputFIelds/FieldComponent';

export default function FormAccountComponent() {
    const [Username, setUsername] = React.useState("");
    const [Password, setPassword] = React.useState("");
    const url_To_Login = 'https://bordeable-api.onrender.com/users/signup';
    const navigate = useNavigate();

    async function Register() {
        const data = {
            username: Username,
            password: Password,
            role:"admin"
        };

        try {
            await fetch(url_To_Login, {
                method: "POST",
                headers: { "Content-Type": "application/json", },
                body: JSON.stringify(data)
            }).then(response => response.json())
                .then(result => {
                    console.log("Éxito:", result);
                    navigate('/dashboard');
                })
        } catch (error) {
            console.error('Error:', error);
        }
    }

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleClick = (event) => {
        event.preventDefault();
        Register();
    };


    return (
        <>
            <form className='form'>
                
                <InputFieldComponent idFor="Username" inputHandler={handleUsernameChange} type="text" />
                <InputFieldComponent idFor="Name" inputHandler={handlePasswordChange} type="text" />
                <InputFieldComponent idFor="Email" inputHandler={handlePasswordChange} type="text" />
                <InputFieldComponent idFor="Password" inputHandler={handlePasswordChange} type="text" />

                <ButtonComponent text="Update" type="Primary" size="lg" _function={handleClick}></ButtonComponent>
                <ButtonComponent text="Delete My Account" type="Danger" size="lg" _function={handleClick}></ButtonComponent>

            </form>
        </>
    )
}
