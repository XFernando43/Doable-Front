import './Select-options.style.css';

export default function SelectOptionsComponent({ type, _function, _function2}) {
    return (
        <>
            {type === "item" ? (
                <div className='options_container_button item-component'>
                    <button className='button-option' onClick={_function2}>Edit</button>
                    <button className='button-option' onClick={_function}>Delete</button>
                </div>
            ) : (
                <div className='options_container_button list-component'>
                    <button className='button-option' onClick={_function2}>Edit</button>
                    <button className='button-option' onClick={_function}>Delete</button>
                </div>
            )}
        </>
    );
}
