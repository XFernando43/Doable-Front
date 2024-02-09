import './Button.style.css'
export default function ButtonComponent( {text, type, _function} ) {
    let classValue = `Button ${type}`;
    return (
        <button className = {classValue} onClick={_function}>
            {text}
        </button>
    );
}


