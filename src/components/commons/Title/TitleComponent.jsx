import './Title.style.css'
export default function TitleComponent({text,size}) {
    const classValue = `HeroTitle ${size}`;
    return (
        <>
            <h1 className={classValue}>{text}</h1>
        </>
    );
}