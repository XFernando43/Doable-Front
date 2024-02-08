import TopBarComponent from "../../components/commons/TopBar/TopBarComponent"
import SelectComponent from "../../components/dasboard/SelectOrder/SelectComponent"
import CardComponent from "../../components/dasboard/Card/CardComponent"

import './Dashboard.style.css';

export default function DashBoardPage(){
    return(
        <>
            <TopBarComponent></TopBarComponent>
            <div className="">
                <SelectComponent/>
                <CardComponent/>
            </div>
        </>
    )
}