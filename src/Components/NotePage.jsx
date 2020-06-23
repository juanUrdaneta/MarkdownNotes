import React, { useState, useEffect } from 'react';
import NoteEdit from './NoteEdit';
import NoteView from './NoteView';

const NotePage = ({item,saveNote}) => {
  
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    setIsEditing(false)
  }, [item.dateCreated]);

  return (
    <div>
      <button 
        disabled={item.data === undefined ? true : false}
        className={`button is-info margin-bottom-20px`}
        onClick={()=>setIsEditing(!isEditing)}>
        Edit  
      </button>
      <div className={`flex`}>
        <NoteEdit 
          item={item}
          isEditing={isEditing}
          saveNote={saveNote}/>
        <NoteView isEditing={isEditing} item={item}/>
      </div>
    </div>
  );
}
 
export default NotePage;