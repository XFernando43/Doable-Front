import React from 'react'
import ButtonComponent from '../../commons/Button/ButtonComponent'
import { useNavigate } from 'react-router-dom';
import './Form.style.css'
import InputFieldComponent from '../../commons/InputFIelds/FieldComponent';
import { LoginContext } from '../../../contexts/ContextLogin';

export default function FormAccountComponent() {
    const [Username, setUsername] = React.useState("");
    const [Password, setPassword] = React.useState("");
    const { isLogin_To_Redirect } = React.useContext(LoginContext); // debp validar que recarge constante mente
    const [name, setname] = React.useState('');
    const [mail, setmail] = React.useState('');

    const navigate = useNavigate();

    async function updateAccount(){
        const url = `https://bordeable-api.onrender.com/users/me`;
        const token = localStorage.getItem('token');
        
        const data = {
            "name": name, 
            "mail": mail, 
            "username": Username, 
            "password": Password 
        };

        try {
            const response = await fetch(url, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(data), 
            });
            if (response.ok) {
                const data = await response.json();
                console.log('user update successfully:', data);
                window.alert("Usuario Actualizado");
            } else {
                console.error('Failed to update user:', response.statusText);
            }
        } catch (error) {
            console.error('Error update user:', error);
        } 
    }

    async function deleteAccount() {
        const delete_url = 'https://bordeable-api.onrender.com/users/me';
    
        try {
            await fetch(delete_url, {
                method: "POST",
                headers: { "Content-Type": "application/json", }
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
        console.log(Username);
    };
    
    const handleNameChange = (event) => {
        setname(event.target.value);
        console.log(Username);
    };
    
    const handlemailChange = (event) => {
        setmail(event.target.value);
        console.log(Username);
    };
    
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
        console.log(Username);
    };
    
    const handleUpdateAccount = (event) => {
        event.preventDefault();
        updateAccount();
    };

    const handleDeleteAccount = (event) => {
        event.preventDefault();
        deleteAccount();
    };

    React.useEffect(()=>{
        isLogin_To_Redirect("login","false");
    },[]);

    return (
        <>
            <form className='form'>
                
                <InputFieldComponent idFor="Username" inputHandler={handleUsernameChange} type="text" />
                <InputFieldComponent idFor="Name" inputHandler={handleNameChange} type="text" />
                <InputFieldComponent idFor="Email" inputHandler={handlemailChange} type="text" />
                <InputFieldComponent idFor="Password" inputHandler={handlePasswordChange} type="text" />

                <ButtonComponent text="Update" type="Primary" size="lg" _function={handleUpdateAccount}></ButtonComponent>
                <ButtonComponent text="Delete My Account" type="Danger" size="lg" _function={handleDeleteAccount} ></ButtonComponent>

            </form>
        </>
    )
}
