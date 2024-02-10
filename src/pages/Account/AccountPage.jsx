import ContextLogin from "../../contexts/ContextLogin"
import TitleComponent from "../../components/commons/Title/TitleComponent";
import FormAccountComponent from "../../components/dasboard/Form/FromAccountComponent";
import TopBarComponent from "../../components/commons/TopBar/TopBarComponent";
import './AccountPage.style.css';
export default function AccountPage(){
    return(
        <ContextLogin>
            <TopBarComponent/>
            <div className="account_container">
                <TitleComponent text="My Account" size="md"/>
                <div className="form_container">
                    <FormAccountComponent/>
                </div>
            </div>
        </ContextLogin>
        
    )
}