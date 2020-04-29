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

  return ( 
    <div className="add-note-sec">
      <div className="field">
        <form 
          className="control"
          onSubmit = {()=>{
            onAdd(createNote(addInputValue));
            setInputValue('');
          }}>
          <input
            className="add-input input is-primary"
            type="text"
            placeholder="Name of your new note..."
            value={addInputValue}
            onChange = {e=>{setInputValue(e.target.value)}}
          />
        </form>
      </div>
      {/* <button
        className="add-button button is-primary"
        onClick={()=>{
          onAdd(createNote(addInputValue));
          setInputValue('');
        }}
      >Add</button> */}
    </div>
   );
}
 
export default AddNote;