import './ColorModal.style.css';

function ColorModal({ Color, SetColor, id } ) {
  
  function changeColor(color){
    SetColor(Color = color);
    console.log(Color);
  }

  return (
    <div className="ColorModal__container" >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="145"
        height="25"
        viewBox="0 0 145 25"
        fill="none"
      >
        <rect
          x="0.5"
          y="0.5"
          width="24"
          height="24"
          rx="12"
          fill="white"
          stroke="#999B9E"
          onClick={()=>{
            changeColor("#999B9E", id)
          }}
        />
        <rect x="30" width="25" height="25" rx="12.5" fill="#F28B82"
          onClick={()=>{
            changeColor("#F28B82",id);
          }} />
        <rect x="60" width="25" height="25" rx="12.5" fill="#FBBC04"
          onClick={()=>{
            changeColor("#FBBC04",id);
          }}
        />
        <rect x="90" width="25" height="25" rx="12.5" fill="#FFF475"
        onClick={()=>{
          changeColor("#FFF475", id)
        }}
        />
        <rect x="120" width="25" height="25" rx="12.5" fill="#CCFF90"
        onClick={()=>{
          changeColor("#CCFF90", id)
        }}
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="145"
        height="25"
        viewBox="0 0 145 25"
        fill="none"
      >
        <rect width="25" height="25" rx="12.5" fill="#A7FFEB"
        onClick={()=>{
          changeColor("#A7FFEB", id)
        }}
        />
        <rect x="30" width="25" height="25" rx="12.5" fill="#CBF0F8"
          onClick={()=>{
            changeColor("#CBF0F8", id)
          }}
        />
        <rect x="60" width="25" height="25" rx="12.5" fill="#AECBFA" 
          onClick={()=>{
            changeColor("#AECBFA", id)
          }}
        />
        <rect x="90" width="25" height="25" rx="12.5" fill="#D7AEFB"
         onClick={()=>{
          changeColor("#D7AEFB", id)
        }}
         />
        <rect x="120" width="25" height="25" rx="12.5" fill="#FDCFE8" 
          onClick={()=>{
            changeColor("#FDCFE8", id)
          }}
        />
      </svg>
    </div>
  );
}

export default ColorModal;
