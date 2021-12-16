import React from "react";

const Delete =({deleteTodo,todo,id})=>{
    return(
        <div>
            <button  className="delete" onClick={() => deleteTodo(id,todo)}>Delete</button>
           
        </div>
    )
}
export default Delete;