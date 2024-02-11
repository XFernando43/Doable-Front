import ListComponent from "../List/ListComponent"
import CreateListForm from "../CreateListForm/CreateListForm";
import OptionsComponent from "../Options/OptionsComponent";
import SelectOptionsComponent from "../Options/selectOptions/SelectOptionsComponent";
import React from "react";
import SubTitleComponent from "../SubTitle/SubTitleComponent";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom"
import { LoginContext } from "../../../contexts/ContextLogin";
import './ListBody.style.css'


export default function ListBodyComponent(){
  const navigate = useNavigate();
  const { id } = useParams();

    let [color, setColor] = React.useState('');
    const [Board, SetBoard] = React.useState('');
    const [Listas, setListas] = React.useState([]);
    const {isLogin_To_Redirect} = React.useContext(LoginContext);
    const [optionActive, SetOptionActive] = React.useState(false);
    
    const [changeBoardTitle, setchangeBoardTitle] = React.useState(false);
    

    function _setChangeBoardTitle(){
      setchangeBoardTitle(!changeBoardTitle);
    }

    async function getBoard(){
      const token = localStorage.getItem('token');
      const API = `https://bordeable-api.onrender.com/board/getBoard/${id}`;
      try {
        const response = await fetch(API, {
          method: "GET",
          headers: {
            "Content-type": "application/json",
            "Authorization": `Bearer ${token}`
          }
        });
        if (response.ok) {
          const data = await response.json();
          SetBoard(data.board[0].board_name);
          if(data.board[0].board_color == ''){
            setColor("#E2E8F0");
          }else{
            setColor(data.board[0].board_color);
          }
          
        } 
      } catch (error) {
        console.error("Error: ", error);
      }
    }


    function ShowOptionsHandle(){
      SetOptionActive(!optionActive);
    }

    async function getListas() {
        const token = localStorage.getItem('token');
        const API = `https://bordeable-api.onrender.com/lists/getLists/${id}`;
        try {
          const response = await fetch(API, {
            method: "GET",
            headers: {
              "Content-type": "application/json",
              "Authorization": `Bearer ${token}`
            }
          });
          if (response.ok) {
            const data = await response.json();
            setListas(data.lists);
          } 
        } catch (error) {
          console.error("Error: ", error);
        }
    }

    async function deleteBoard(){
      const url = `https://bordeable-api.onrender.com/board/${id}`;
      const token = localStorage.getItem('token');
      try {
        const response = await fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });
        if (response.ok) {
          const data = await response.json();
          console.log('List Board deleted successfully:', data);
          navigate('/dashboard');
        } else {
          console.error('Failed to delete Board:', response.statusText);
        }
      } catch (error) {
        console.error('Error deleting Board:', error);
      } 

      ShowOptionsHandle();
    }

    React.useEffect(()=>{
        isLogin_To_Redirect("login","false");
        getListas();
        getBoard();
    },[Listas])


    return(
      <div className="main_contentList" style={{background:color}}>
        <div className="lists_body_container">
          <div className="list_head_container">
            
            <SubTitleComponent text={Board} size="md" change={changeBoardTitle}/>

            <OptionsComponent click={ShowOptionsHandle} />
            {optionActive && (
              <SelectOptionsComponent type="item" _function={deleteBoard} _function2={_setChangeBoardTitle}/>
            )}
          </div>
          <div className="mainList_container">
              {
                Listas.map(lista => (
                  <ListComponent title={lista.list_name} _id={lista.list_id} key={lista.list_id}/>
                  ))
              }

            <CreateListForm title="List Title" _id="1" />
          </div>
        </div>
    </div>
    )
}