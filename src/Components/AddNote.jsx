import { useState } from "react";

const AddNote = ({handleAddNote}) => {
  const [noteText,setNoteText] = useState('');
  const characterLimit = 200;
  const handleChange =(e) =>{
    if(characterLimit - e.target.value.length >=0 ){
      setNoteText(e.target.value);
    }
  }
  const handleClick = () =>{
    if(noteText.trim().length>0){
      handleAddNote(noteText);
      setNoteText('');
    }
  }

  return (
    <div className="note-list new">
      <textarea 
          value={noteText}
          cols="10" 
          rows="8"
          placeholder="Type to add note..."
          onChange={(e)=> handleChange(e)}
          id="input"
          >
      </textarea>
      <div className="note-footer">
        <span> {characterLimit - noteText.length} remainings </span>
        <div>
          <button onClick={handleClick}> save </button>
        </div>
      </div>
    </div>
  )
}

export default AddNote;