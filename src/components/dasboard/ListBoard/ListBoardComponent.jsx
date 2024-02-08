import CardComponent from '../Card/CardComponent';
import './ListBoard.style.css';
export default function ListBoardComponent(){
    // const {card,setCards} = React.useState([]);

    return (
        <div className='listBoard_container'>
            <CardComponent value="1" title="HOLA"/>
            <CardComponent title="My Board Title"/>
            <CardComponent title="My Board Title"/>
            <CardComponent title="My Board Title"/>
            <CardComponent title="My Board Title"/>
            <CardComponent title="My Board Title"/>
            <CardComponent title="My Board Title"/>
            <CardComponent title="My Board Title"/>
            <CardComponent title="My Board Title"/>
            <CardComponent title="My Board Title"/>
            <CardComponent title="My Board Title"/>
            <CardComponent title="My Board Title"/>
            <CardComponent title="My Board Title"/>
            <CardComponent title="My Board Title"/>
            
        </div>
    )
}