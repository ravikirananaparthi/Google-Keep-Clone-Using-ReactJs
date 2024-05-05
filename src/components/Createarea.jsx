import React, { useState } from 'react';

function Createarea({submitButton,onAdd}) {
    const [isExpanded, setExpand]=useState(false);
    const [note , setNote]=useState({
        title :"",
        content :"",
    });
    function handleChange(e)
    {
       const{name,value}=e.target;
       setNote((preValue)=>{
        return {
            ...preValue,
            [name]:value,
        }
       });
    }
    function handleExpanded()
    {
        setExpand(true);
    }
    function submitButton(event)
    {
        event.preventDefault();
        onAdd(note);
        setNote({
            title:"",
            content:"",
        })
    }
    return (
        <div>
            <form >
                {isExpanded&&(
                    <input value ={note.title}type ="text" 
                placeholder='Title'name ="title"onChange={handleChange}/>
                )}
                <p>
                    <textarea value ={note.content }onClick={handleExpanded}name ="content"
                     placeholder="Take a note.."onChange ={handleChange}></textarea>
                    
                </p>
                <button onClick={submitButton}>Add</button>
            </form>
        </div>
    );
}

export default Createarea;