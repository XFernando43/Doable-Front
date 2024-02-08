export default function LabelComponent({text,size, htmlFor}){
    const classValue = `label_ ${size}`;
    return(
    <label className={classValue} htmlFor={htmlFor}>
        {text}
    </label>
    )
}