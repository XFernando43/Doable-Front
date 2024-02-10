import ContextLogin from "../../contexts/ContextLogin";
import TopBarComponent from "../../components/commons/TopBar/TopBarComponent"
import TitleComponent from "../../components/commons/Title/TitleComponent";
import ListComponent from "../../components/dasboard/List/ListComponent";


import './ListPage.style.css';
export default function ListPage(){
    return (
        <>
            <ContextLogin>
    
                <TopBarComponent></TopBarComponent>
                <div className="listPageContainer">
                    <div className="main_contentList">
                        <TitleComponent text="My Boards title" size="md"/>
                        <div className="lists_container">
                            <ListComponent title="to-do"/>
                            <ListComponent title="to-do"/>
                            <ListComponent title="to-do"/>
                            <ListComponent title="to-do"/>
                        </div>

                    </div>
                </div>
              
            </ContextLogin>
    
    
        </>
    )
}