import React, { useRef, useEffect } from 'react';
import marked from 'marked';
import { useSpring, animated } from 'react-spring';


const NoteView = ({item, isEditing}) => {
  const viewer = useRef(null);
  
  const anim = useSpring({
    width: isEditing ? 500 : 800, 
  })

  useEffect(()=>{
    viewer.current.innerHTML = marked(item.data || '');
  },[item])

  return ( 
    <animated.div 
      style={anim}
      className="margin-horizontal content" ref={viewer}>
    </animated.div>
  );
}
 
export default NoteView;