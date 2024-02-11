import React from 'react'
import ButtonComponent from '../../commons/Button/ButtonComponent'
import './Form.style.css'
import InputFieldComponent from '../../commons/InputFIelds/FieldComponent';
import { LoginContext } from '../../../contexts/ContextLogin';

export default function FormAccountComponent() {
    const [Username, setUsername] = React.useState("");
    const [Password, setPassword] = React.useState("");
    const { isLogin_To_Redirect,handleLogout } = React.useContext(LoginContext);
    const [name, setname] = React.useState('');
    const [mail, setmail] = React.useState('');


    async function getMe(){
        const url = `https://bordeable-api.onrender.com/users/me`;
        const token = localStorage.getItem('token');

        try {
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
            });
            if (response.ok) {
                const data = await response.json();
                console.log(data.me);
                setUsername(data.me.username);
                setmail(data.me.mail);
                setname(data.me.name);
            } else {
                console.error('Failed to get user:', response.statusText);
            }
        } catch (error) {
            console.error('Error getting user:', error);
        } 
    }

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
        const token = localStorage.getItem('token');
    
        try {
            await fetch(delete_url, {
                method: "DELETE",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
            }).then(response => response.json())
                .then(result => {
                    console.log(result);
                    window.alert("Cuenta eliminada");
                    handleLogout();
                    // navigate('/login');
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
        getMe();
    },[]);

    return (
        <>
            <form className='form'>
                
                <InputFieldComponent idFor="Username" inputHandler={handleUsernameChange} type="text" _value={Username}/>
                <InputFieldComponent idFor="Name" inputHandler={handleNameChange} type="text" _value={name}/>
                <InputFieldComponent idFor="Email" inputHandler={handlemailChange} type="text" _value={mail}/>
                <InputFieldComponent idFor="Password" inputHandler={handlePasswordChange} type="text" />

                <ButtonComponent text="Update" type="Primary" size="lg" _function={handleUpdateAccount}></ButtonComponent>
                <ButtonComponent text="Delete My Account" type="Danger" size="lg" _function={handleDeleteAccount} ></ButtonComponent>

            </form>
        </>
    )
}
