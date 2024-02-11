import React from 'react'
import ButtonComponent from '../../commons/Button/ButtonComponent'
import { Link, useNavigate } from 'react-router-dom';
import './Form.style.css'
import InputFieldComponent from '../../commons/InputFIelds/FieldComponent';

export default function FormRegisterComponent() {
    const [Username, setUsername] = React.useState("");
    const [Password, setPassword] = React.useState("");
    const [userUsed, setUserUsed] = React.useState(false);

    const navigate = useNavigate();
    
    async function Register() {
        const url_To_Register = 'https://bordeable-api.onrender.com/users/signup';
        const data = {
            username: Username,
            password: Password,
            role:"admin"
        };

        try {
            const response = await fetch(url_To_Register, {
                method: 'POST',
                headers: { "Content-Type": "application/json", },
                body: JSON.stringify(data)
            });
            if (response.ok) {
                const data = await response.json();
                console.log("Éxito:", data);
                window.alert("Creado con extio");
                navigate('/login');
            } else {
                console.error('Failed to login:', response.statusText);
                setUserUsed(true);
            }
        } catch (error) {
            console.error('Error:', error);
            setUserUsed(true);
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
                
            {
                    userUsed === true &&(
                        <p className='message_erro'>Usuario Ya en uso</p>
                    )
                }

                <InputFieldComponent idFor="Username" inputHandler={handleUsernameChange} type="text" />
                <InputFieldComponent idFor="Password" inputHandler={handlePasswordChange} type="text" />

                <ButtonComponent text="Register" type="Primary" size="lg" _function={handleClick}></ButtonComponent>

                <Link to="/login" className='link_' href="">Login with your Account
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M3.33331 7.99998H12.6666M12.6666 7.99998L7.99998 3.33331M12.6666 7.99998L7.99998 12.6666" stroke="#6D28D9" />
                    </svg>
                </Link>

            </form>
        </>
    )
}
