import React, {useRef} from 'react';

const NoteListItem = ({item, deleteItem, setSelected, selected}) => {
  
  const name = useRef(null);

  return ( 
    <div className="level columns list-item">
      <p 
        onClick={()=>setSelected(item)} 
        className={``} 
        ref={name} >{item.name}</p>
      {/* <div 
        className="button is-danger" 
        onClick={()=>{
          deleteItem(item);
        }}
      >X</div> */}
      <div className={"level"}>
        <div href="" className="delete"
          onClick={()=>deleteItem(item)}>
        </div>
      </div>
    </div>
  );
}
 
export default NoteListItem;