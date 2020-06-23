import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';

const NoteEdit = ({item, saveNote, isEditing}) => {

  const [textAreaValue,setTextAreaValue] = useState(item.data);

  useEffect(()=>{
    setTextAreaValue(item.data);
  },[item.dateCreated, item.data]);

  const anim = useSpring({
    from: {width: 0, visibility: 'hidden'},
    to  : {
      width: isEditing ? 500 : 0,
      visibility: isEditing ? 'visible' : 'hidden'}
  });

  return ( 
    <div>
      <animated.textarea 
        value={textAreaValue} 
        style={anim}
        className="textarea has-fixed-size is-info"
        rows={25}
        onChange={e=>setTextAreaValue(e.target.value)}
        onKeyUp = {() => saveNote({...item,data: textAreaValue})}
        >
      </animated.textarea>
    </div>
  );
}
 
export default NoteEdit;