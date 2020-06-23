import React, { useRef, useEffect } from 'react';
import marked from 'marked';
import { useSpring, animated } from 'react-spring';

const DEFAULT_TEXT  = "# Hello! \n\n## This app store your notes in the browser.\n\n---\n\nWith this app you can write notes with Markdown format and store them in the browser for future reference.\n\n* You can use *most* of the available markup functions\n* You can **highlight** important text\n* Create lists\n* `And even add a code block!`\n\n> You could Quote an important note\n\n---\n\n**Start by creating a new note in the side menu!** \n\n [Check the Cheat Sheet](https://www.markdownguide.org/cheat-sheet/)"

const NoteView = ({item, isEditing}) => {
  const viewer = useRef(null);
  
  const anim = useSpring({
    width: isEditing ? 500 : 800, 
  })

  useEffect(()=>{
    switch(item.data){
      case undefined: 
        viewer.current.innerHTML = marked(DEFAULT_TEXT);
        break;
      case '':
        viewer.current.innerHTML = marked('## Start editing by clicking the Edit button');
        break;
      case item.data: 
        viewer.current.innerHTML = marked(item.data);
        break;
      default: 
        viewer.current.innerHTML = marked('# Something went wrong... \n ## Try reloading the page.');
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