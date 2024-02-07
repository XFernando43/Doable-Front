import ButtonComponent from "../../components/commons/Button/ButtonComponent"
import TitleComponent from "../../components/commons/Title/TitleComponent"
import FormComponent from "../../components/dasboard/Form/FromComponent"

export default function LoginPage(){
    
    return(
        <>
            <TitleComponent text="Welcome To Bordeable" size="lg"/>
            <FormComponent></FormComponent>
            <ButtonComponent text="Enter"></ButtonComponent>
        </>
    )
}