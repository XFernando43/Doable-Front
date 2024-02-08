import ButtonComponent from '../../commons/Button/ButtonComponent'
import './Form.style.css'

export default function FormComponent(){
    return(
    <>
        <form className='form'>
            <div className='input-container'>
                <label className='label' htmlFor="username">Username</label>
                <input className='input-form' type="text" id="username" />
            </div>

            <div className='input-container'>
                <label className='label' htmlFor="password">password</label>
                <input className='input-form' type="text" id="password" />
            </div>

            <ButtonComponent text="Login" type="Primary" size="lg"></ButtonComponent>

            <a className='link_' href="">Create an Account
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3.33331 7.99998H12.6666M12.6666 7.99998L7.99998 3.33331M12.6666 7.99998L7.99998 12.6666" stroke="#6D28D9"/>
                </svg>
            </a>

        </form>
    </>
    )
}
