import React from 'react'
import ButtonComponent from '../../commons/Button/ButtonComponent'
import './Form.style.css'

export default function FormComponent(){
    const [Username,setUsername] = React.useState("");
    const [Password,setPassword] = React.useState("");
    
    const url_To_Login = 'http://localhost:5500/users/SignIn';
    // const userInfo = React.useContext(LoginContext);
    // const {token,setToken} = React.useState(localStorage.getItem('token'));


    async function Login(){        
        const data = {
            username: "XFERNANDO",
            password: "Mierdamierda123"
        };

        try{
          await fetch(url_To_Login, {
            method: "POST",
            headers: {"Content-Type": "application/json",},
            body: JSON.stringify(data)
          }).then(response => response.json())
            .then(result => {
              console.log("Éxito:", result);
            })
        }catch (error) {
          window.alert('NO SE PUDO AGREGAR POKEMON A FAVORITOS');
          console.error('Error:', error);
        }
    }

    const handleUsernameChange = (event) => {
        console.log(Username);
        setUsername(event.target.value);
    };
    
    const handlePasswordChange = (event) => {
        console.log(Password);
        setPassword(event.target.value);
    };

    const handleClick = (event) => {
        event.preventDefault(); 
        Login();
        // window.alert("AC")
        // console.log(userInfo);
    };  



    return(
    <>
        <form className='form'>
            <div className='input-container'>
                <label className='label' htmlFor="username">Username</label>
                <input className='input-form' type="text" id="username" onChange={handleUsernameChange}/>
            </div>

            <div className='input-container'>
                <label className='label' htmlFor="password">password</label>
                <input className='input-form' type="text" id="password" onChange={handlePasswordChange} />
            </div>

            <ButtonComponent text="Login" type="Primary" size="lg" _function = {handleClick}></ButtonComponent>

            <a className='link_' href="">Create an Account
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3.33331 7.99998H12.6666M12.6666 7.99998L7.99998 3.33331M12.6666 7.99998L7.99998 12.6666" stroke="#6D28D9"/>
                </svg>
            </a>

        </form>
    </>
    )
}


// const url_To_Login = 'http://localhost:5500/users/SignIn';
// const userInfo = React.useContext(LoginContext);
// const {token,setToken} = React.useState(localStorage.getItem('token'));


// async function Login(){
//     const data = {
//     username: 'XFERNANDO',
//     password: 'Mierdamierda123'
//     };

//     fetch(url_To_Login, {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(data)
//     })
//     .then(response => {
//     if (!response.ok) {
//         throw new Error('Error en la solicitud');
//     }
//     return response.json();
//     })
//     .then(data => {
//     console.log('Respuesta del servidor:', data);
//     })
//     .catch(error => {
//     console.error('Error:', error);
//     });
// }

