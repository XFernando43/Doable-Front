import './Button.style.css'

export default function ButtonComponent( {text, type} ) {
    let classValue = `Button ${type}`;
    return (
        <button className = {classValue}>
            {text}
        </button>
    );
}


