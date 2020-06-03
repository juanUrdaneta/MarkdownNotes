import React, { useRef, useEffect } from 'react';
import marked from 'marked';
import { useSpring, animated } from 'react-spring';


const NoteView = ({item, isEditing}) => {
  const viewer = useRef(null);
  
  const anim = useSpring({
    width: isEditing ? 500 : 800, 
  })

  useEffect(()=>{
    switch(item.data){
      case undefined: 
        viewer.current.innerHTML = marked('## Add a new note...');
        break;
      case '':
        viewer.current.innerHTML = marked('');
        break;
      case item.data: 
        viewer.current.innerHTML = marked(item.data);
        break;
      default: 
        viewer.current.innerHTML = marked('# default');
    }
  },[item])

  return ( 
    <animated.div 
      style={anim}
      className="margin-horizontal content" ref={viewer}>
    </animated.div>
  );
}
 
export default NoteView;