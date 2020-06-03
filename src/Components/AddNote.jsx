import React, {useState} from 'react';

const createNote = (noteName) => {
  return {
    dateCreated : Date.now(),
    name: noteName,
    data:"",
  }
}

const AddNote = ({onAdd}) => {

  const [addInputValue, setInputValue] = useState('');

  const handleKeyUp = (key) => {
    if (key === "Enter") {
      onAdd(createNote(addInputValue));
      setInputValue('')
    }
  }

  return ( 
    <div className="">
      <div className="field">
        <div 
          >
          <input
            className="input is-info"
            type="text"
            placeholder="Name of your new note..."
            value={addInputValue}
            onChange = {e=>{setInputValue(e.target.value)}}
            onKeyPress = {e=>{handleKeyUp(e.key)}}
          />
        </div>
      </div>
    </div>
   );
  }
  
  export default AddNote;