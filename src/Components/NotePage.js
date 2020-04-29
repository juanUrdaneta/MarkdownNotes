import React, {useState} from 'react';
import NoteEdit from './NoteEdit';
import NoteView from './NoteView';

const NotePage = ({item,saveNote}) => {
  const [toggle, setToogle] = useState(true)
  return (
    <div className=" note-page">
      <button
        className="button is-primary"
        onClick={()=>setToogle(!toggle)}>
      {toggle ? 'View' : 'Edit'}</button>
      {toggle && (
      <NoteEdit 
        item={item}
        saveNote={saveNote}/>)
      }
      {!toggle && (
      <NoteView item={item}/>)}
    </div>
  );
}
 
export default NotePage;