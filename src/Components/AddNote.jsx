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
    <div className="">
      <div className="field">
        <form 
          className="control"
          onSubmit = {()=>{
            onAdd(createNote(addInputValue));
            setInputValue('');
          }}>
          <input
            className="input is-info"
            type="text"
            placeholder="Name of your new note..."
            value={addInputValue}
            onChange = {e=>{setInputValue(e.target.value)}}
          />
        </form>
      </div>
    </div>
   );
}
 
export default AddNote;