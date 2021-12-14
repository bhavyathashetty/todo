import React from "react";



const Edit =({editTodo,todo})=>{
    return(
        <div>
            <button  className="edit" onClick={() => editTodo(todo)}>Edit</button>
           
        </div>
    )
}
export default Edit;