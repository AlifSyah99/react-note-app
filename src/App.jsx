import { useState,useEffect } from "react";
import Header from "./Components/Header";
import NoteList from "./Components/NoteList";
import Search from "./Components/Search";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [darkMode, setDarkMode] = useState(true);
  
  useEffect(()=>{
    getNotes();
  },[]);

  useEffect(()=>{
    localStorage.setItem('react-app-note', JSON.stringify(notes));
  },[notes]);

  function getNotes(){
    const saveNotes = JSON.parse(localStorage.getItem('react-app-note'));
      if(saveNotes){
         setNotes(saveNotes);
      }
     
  }  

  const generateID = () => {
    return +new Date();
  }
  const generateNote = (text) => {
    const date = new Date();
    return {
      id: generateID(),
      date: date.toLocaleDateString(),
      text: text
    }
  }
  const addNote = (text) => {
    const newNotes = [...notes, generateNote(text)];
    setNotes(newNotes);
  }

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes)
  }
  const searchNote = (value) => {
    setSearchText(value.toLowerCase());
  }
  
  return (
    <div className={darkMode ? 'dark-mode' : ''}>
      <div className="wrapper">
        <Header setDarkMode={setDarkMode}/>
        <Search handleSearchNote={searchNote} />
        <NoteList notes={notes?.filter((note) => note.text.toLowerCase().includes(searchText))}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
        />
      </div>
    </div>
  )
}

export default App;