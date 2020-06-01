import React, {useState, useEffect} from 'react';
import NoteEdit from './NoteEdit';
import NoteView from './NoteView';

const NotePage = ({item,saveNote}) => {
  const [toggle, setToogle] = useState(false);
  useEffect(() => {
    if(item.data === '') {setToogle(true)}
  }, [item])
  return (
    <div className={`note-page ${item === '' ? "is-hidden" : ''}`}>
        <button
          className="button is-primary"
          onClick={()=>setToogle(!toggle)}>
        {toggle ? 'View' : 'Edit'}
        </button>
          {toggle 
          ? (
          <NoteEdit 
            item={item}
            saveNote={saveNote}/>)
          : (
          <NoteView item={item}/>)
        }
    </div>
  );
}
 
export default NotePage;  