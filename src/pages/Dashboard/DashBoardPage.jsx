import TopBarComponent from "../../components/commons/TopBar/TopBarComponent"
import SelectComponent from "../../components/dasboard/SelectOrder/SelectComponent"
// import CardComponent from "../../components/dasboard/Card/CardComponent"
import ListBoardComponent from "../../components/dasboard/ListBoard/ListBoardComponent";
import './Dashboard.style.css';

export default function DashBoardPage(){
    return(
        <div className="Board_container">
            <TopBarComponent></TopBarComponent>
            <div className="main_content">
                <SelectComponent/>
                {/* <CardComponent/> */}
                <ListBoardComponent/>
                
            </div>
        </div>
    )
}