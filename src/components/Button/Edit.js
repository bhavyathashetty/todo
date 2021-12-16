import React from "react";


const Edit =({editTodo,id,todo})=>{
    return(
        <div>
            <button  className="edit" onClick={() => editTodo(id,todo)}>Edit</button>
           
        </div>
    )
}
export default Edit;