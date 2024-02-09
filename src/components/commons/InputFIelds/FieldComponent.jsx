import './Field.style.css'

export default function InputFieldComponent({idFor, inputHandler, type}){
    return(
        <div className='input-container'>
            <label className='label' htmlFor="idFor">{idFor}</label>
            <input className='input-form' type={type} id="idFor" onChange={inputHandler} />
        </div>
    )
}