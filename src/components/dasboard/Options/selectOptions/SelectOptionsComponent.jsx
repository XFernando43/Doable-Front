import './Select-options.style.css';

export default function SelectOptionsComponent({ type }) {
    return (
        <>
            {type === "item" ? (
                <div className='options_container_button item-component'>
                    <button className='button-option'>Edit</button>
                    <button className='button-option'>Delete</button>
                </div>
            ) : (
                <div className='options_container_button list-component'>
                    <button className='button-option'>Edit</button>
                    <button className='button-option'>Delete</button>
                </div>
            )}
        </>
    );
}
