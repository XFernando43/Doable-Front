import './CreateListForm.style.css';
// import TitleComponent from "../../commons/Title/TitleComponent"
// import React from 'react';
// import OptionsComponent from "../Options/OptionsComponent";
// import ListItemComponent from "../LisItem/ListItemComponent";
// import SelectOptionsComponent from "../Options/selectOptions/SelectOptionsComponent";
import ButtonComponent from "../../commons/Button/ButtonComponent";
import InputFieldComponent from "../../commons/InputFIelds/FieldComponent";
export default function CreateListForm(){
    // const [LisTitle, SetListTitle] = React.useState("");

    


    
    // function onTitleListHandler(event){
    //   SetListTitle(event.target.value);
    //   console.log(LisTitle);
    // }

   
    return (
      // <div className="CreateList_container">
      //   <div className="CreateList_header">
      //     <InputFieldComponent idFor="List Title" inputHandler={onTitleListHandler} type="text" />
      //   </div>    
      
      
      // </div>
      
      <div className="prueba1_">
        <header className="prueba1_header">
          <InputFieldComponent idFor="List Title" type="text" />
        </header>
        <ButtonComponent text="Create New List" type="Primary"/>
      </div>
    )
}