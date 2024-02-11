import TopBarComponent from "../../components/commons/TopBar/TopBarComponent"
import BoardMainComponent from "../../components/dasboard/BoardMainComponent/BoardMainComponent";
import ContextLogin from "../../contexts/ContextLogin";
import './Dashboard.style.css';
export default function DashBoardPage(){
    return(
        <ContextLogin>
            <div className="Board_container">
                <TopBarComponent></TopBarComponent>
                <BoardMainComponent/>
            </div>
        </ContextLogin>
    )
}