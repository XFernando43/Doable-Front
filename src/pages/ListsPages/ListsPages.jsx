import ContextLogin from "../../contexts/ContextLogin";
import TopBarComponent from "../../components/commons/TopBar/TopBarComponent"
import TitleComponent from "../../components/commons/Title/TitleComponent";
import ListBodyComponent from "../../components/dasboard/ListsBody/ListBodyComponent";

import './ListPage.style.css';
export default function ListPage(){
    return (
        <>
            <ContextLogin>  
                <TopBarComponent></TopBarComponent>
                <div className="listPageContainer">
                    <div className="main_contentList">
                        <TitleComponent text="My Boards title" size="md"/>
                        <ListBodyComponent/>
                        
                    </div>
                </div>
              
            </ContextLogin>
    
    
        </>
    )
}