import React, {} from 'react';
import NoteListItem from './NoteListItem';

const NoteList = ({items, deleteF, setSelected, selected}) => {

  return ( 
    <div className="dont-select">
      {
        items.map(item=>(
          <NoteListItem 
            key={item.dateCreated} 
            item={item} 
            deleteItem={deleteF}
            selected={selected === item.dateCreated ? true : false}
            setSelected={setSelected}/>
        ))
      }
    </div> 
  );
}
 
export default NoteList;