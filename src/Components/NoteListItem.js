import React, {useRef} from 'react';

const NoteListItem = ({item, deleteItem, setSelected, selected}) => {
  
  const name = useRef(null);

  return ( 
    <div className="list-item">
      <p 
        onClick={()=>setSelected(item)} 
        className={`${selected ? 'list-item--selected' : ''}`} 
        ref={name} >{item.name}</p>
      <div 
        className="button is-danger" 
        onClick={()=>{
          deleteItem(item);
        }}
      >X</div>
    </div>
  );
}
 
export default NoteListItem;