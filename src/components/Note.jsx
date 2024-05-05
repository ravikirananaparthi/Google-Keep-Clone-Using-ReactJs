import React from 'react';

function Note({title,content,onDelete,id}) {
    const  img =<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFx6hp_J-R3FVF7fs7aL2upFec1qGRPuc6zw&usqp=CAU"/>
    return (
        
        <div className='note'>
            <h1>{title}</h1>
            <p>{content} </p>
            <button onClick={()=>onDelete(id)}></button>
        </div>
    );
}

export default Note;