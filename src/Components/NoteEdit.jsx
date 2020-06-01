import React, { useState, useEffect } from 'react';

const NoteEdit = ({item, saveNote}) => {

  const [textAreaValue,setTextAreaValue] = useState(item.data);

  useEffect(()=>{
    setTextAreaValue(item.data);
  },[item]);

  return ( 
    <div className="column">
      <textarea 
        value={textAreaValue} 
        className="textarea is-info"
        rows={25}
        onChange={e=>setTextAreaValue(e.target.value)}
        onKeyUp = {() => saveNote({...item,data: textAreaValue})}
        >
      </textarea>
    </div>
  );
}
 
export default NoteEdit;