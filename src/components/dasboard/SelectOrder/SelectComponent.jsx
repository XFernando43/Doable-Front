import TitleComponent from "../../commons/Title/TitleComponent";
import LabelComponent from "../../commons/Label/LabelComponent";
import './Select.style.css';

export default function SelectComponent(){
    
    return(
        <div className="container">
            <TitleComponent text="My Boards" size="md"/>
            <div className="select_container">
                <LabelComponent text="Sort By" size="sm" htmlFor="orderBy"/>
                <select className="selector" name="" id="orderBy">
                    <option>Created Date</option>
                    <option>Order Desc</option>
                    <option>Order Asc</option>
                </select>
            </div>
        </div>
    )
}