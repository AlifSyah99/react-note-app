import { MdDeleteForever } from 'react-icons/md';

const Note = ({ text, date, id, handleDeleteNote }) => {

  return (
    <div className="note-list">
      <div className="note-text">
        {text}
      </div>
      <div className="note-footer">
        <span> {date} </span>
        <MdDeleteForever className="delete-icon" size="1.3em" onClick={() => handleDeleteNote(id)} />
      </div>
    </div>
  )
}

export default Note;