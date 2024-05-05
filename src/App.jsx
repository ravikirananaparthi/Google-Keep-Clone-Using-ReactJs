import React, { useState } from 'react';
import "./styles.css";
import Header from "./components/Header";
import Createarea from './components/Createarea';
import Note from "./components/Note";
function App(props) {
    const [notes,setNotes]=useState([]);
    function addNote(newNote)
    {
        setNotes((preValue)=>{
            return [...preValue,newNote];
        });
    }
    function handleDelete(id)
    {
        setNotes(preValue=>{
            return [...preValue.filter((note,index)=>
                index!==id )];
        })
    }
    return (
        <div className='App'>
            <Header/>
            <Createarea onAdd={addNote}/>
            {notes.map((note,index)=>(
                <Note
                    key={index}
                    id={index}
                    title={note.title}
                    content={note.content}
                    onDelete={handleDelete}
                />
            ))}
        </div>
    );
}

export default App;