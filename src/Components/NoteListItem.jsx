import React, {useRef} from 'react';
import { useSpring, animated } from 'react-spring'

const NoteListItem = ({item, deleteItem, setSelected, selected}) => {
  
  const name = useRef(null);

  const selectedAnim = useSpring({
    fontWeight: selected ? 800 : 400,
    fontSize: selected ? '20px' : '16px',
    config: {duration: 150}
  })

  return ( 
    <div className="level columns list-item">
      <animated.p 
        style={selectedAnim}
        onClick={()=>setSelected(item)} 
        className={``} 
        ref={name} >{item.name}</animated.p>
      <div className={"level"}>
        <div href="" className="delete"
          onClick={()=>deleteItem(item)}>
        </div>
      </div>
    </div>
  );
}
 
export default NoteListItem;