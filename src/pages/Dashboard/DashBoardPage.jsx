import TopBarComponent from "../../components/commons/TopBar/TopBarComponent"
import SelectComponent from "../../components/dasboard/SelectOrder/SelectComponent"
import ListBoardComponent from "../../components/dasboard/ListBoard/ListBoardComponent";
import ContextLogin from "../../contexts/ContextLogin";
import './Dashboard.style.css';
export default function DashBoardPage(){
    return(
        <ContextLogin>
            <div className="Board_container">
                <TopBarComponent></TopBarComponent>
                <div className="main_content">
                    <SelectComponent/>
                    <ListBoardComponent/>  
                </div>
            </div>
        </ContextLogin>
    )
}