import AddNote from "./AddNote";
import Note from "./Note";


// eslint-disable-next-line react/prop-types
const NoteList = ({notes, handleAddNote,handleDeleteNote}) => {
  return (
    <div className="note-container">
      { notes?.map(( note ) => (
         <Note key={note.id} id={note.id}text={note.text}  date={note.date} handleDeleteNote={handleDeleteNote} />
        ))
      }
      <AddNote handleAddNote={handleAddNote}/>
    </div>
  )
}

export default NoteList;