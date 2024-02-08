import TopBarComponent from "../../components/commons/TopBar/TopBarComponent"
import SelectComponent from "../../components/dasboard/SelectOrder/SelectComponent"

export default function DashBoardPage(){
    return(
        <>
            <TopBarComponent></TopBarComponent>
            <div className="container">
                <SelectComponent/>
            </div>
        </>
    )
}