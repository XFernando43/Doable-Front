import TitleComponent from "../../commons/Title/TitleComponent";
import './Select.style.css';

export default function SelectComponent(){
    
    return(
        <div className="container">
            <TitleComponent text="My Boards" size="md"/>
                
            <div className="select_container">
                <label className="label_" htmlFor="orderBy">Sort By</label>
                <select className="selector" name="" id="orderBy">
                    <option>Created Date</option>
                    <option>Order Desc</option>
                    <option>Order Asc</option>
                </select>
            </div>
        </div>
    )
}