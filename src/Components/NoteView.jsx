import React, { useRef, useEffect } from 'react';
import marked from 'marked';


const NoteView = ({item}) => {
  const viewer = useRef(null);
  
  useEffect(()=>{
    viewer.current.innerHTML = marked(item.data || '');
  },[item])

  return ( <div className="note-view content" ref={viewer}></div> );
}
 
export default NoteView;