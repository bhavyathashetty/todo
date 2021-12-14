import React from "react";



const Delete =({deleteTodo,todo})=>{
    return(
        <div>
            <button  className="delete" onClick={() => deleteTodo(todo)}>Delete</button>
           
        </div>
    )
}
export default Delete;