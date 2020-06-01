import React, { useState } from 'react';

const options = ['Date','Name','Length'];

const NoteListSort = ({sortItems}) => {

  let [selected,setSelected] = useState(options[0]);

  return ( 
      <div className="margin-vertical-20px flex-space-around">
        <div className="select is-info">
          <select 
            onChange={(e)=>setSelected(e.target.value)}>
            {
              options.map((e,i)=><option key={i} value={e} seleted={(i===0)?'selected':''} >{e}</option>)
            }
          </select>
        </div>
        <button className="button is-info" onClick={()=>sortItems(selected.toLowerCase())}>Up</button>
        <button className="button is-info" onClick={()=>sortItems(selected.toLowerCase(),false)}>Down</button>
      </div>
  );
}
 
export default NoteListSort;  