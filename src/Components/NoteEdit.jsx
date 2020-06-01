import React, { useRef, useState, useEffect } from 'react';

const NoteEdit = ({item, saveNote}) => {
  const textarea = useRef(null)

  const [textAreaValue,setTextAreaValue] = useState(item.data);

  useEffect(()=>{
    setTextAreaValue(item.data);
  },[item]);

  return ( 
    <div className="note-edit">
      <textarea 
        ref={textarea} 
        value={textAreaValue} 
        className="textarea has-fixed-size tarea"
        onChange={e=>setTextAreaValue(e.target.value)}
        onKeyUp = {() => saveNote({...item,data: textarea.current.value})}
        >
      </textarea>
    </div>
  );
}
 
export default NoteEdit;