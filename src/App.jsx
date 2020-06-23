import React, { useState } from 'react';
import AddNote from './Components/AddNote'
import NoteList from './Components/NoteList';
import NotePage from './Components/NotePage';
import NoteListSort from './Components/NoteListSort';

import sortList from './functions/sortNotes';

import './App.sass'

const getItems = () => {
  const keys = Object.keys(localStorage);
  let items = [];
   
  for(let key of keys) {
    items.push(JSON.parse(localStorage.getItem(key)));
  }

  return items;
}

const App = () => {

  const [items, setItems] = useState(getItems());
  const [selectedItem, setSelectedItem] = useState(getItems()[0]||'');

  const addNote = newNote => {
    setItems([newNote, ...items]);
    localStorage.setItem(newNote.dateCreated, JSON.stringify(newNote));
    // setSelectedItem(getItems()[getItems().length - 1 ]);
    setSelectedItem(newNote);
  }
  const deleteNote = note => {
    localStorage.removeItem(note.dateCreated);
    setItems(items.filter(e=>e.dateCreated!==note.dateCreated));
    setSelectedItem(getItems()[0]||'');
  }
  const saveNote = note => {//updateNote
    setItems(items.map(item=>{
      if(item.dateCreated === note.dateCreated){
        return note;
      }else{
        return item;
      }
    }));
    localStorage.setItem(note.dateCreated, JSON.stringify(note));
    setSelectedItem(note);
  }
  
  const sortItems = (param, forward = true) => {
    setItems(sortList(items,param,forward));
    setSelectedItem(items[0] || '')
  }

  return ( 
    <div className="container margin-vertical-40px">
      <div className="columns">
        <div className="column is-one-quarter">
          <AddNote onAdd = {addNote}/>
          <NoteListSort sortItems={sortItems}/>
          <NoteList 
            items={items}
            selected={selectedItem}
            setSelected={setSelectedItem} 
            deleteF={deleteNote}/>
        </div>
        <div className="column right-panel">
          <NotePage 
            item={selectedItem}
            saveNote={saveNote}
          />
        </div>
      </div>
    </div>  
  );
}
 
export default App;