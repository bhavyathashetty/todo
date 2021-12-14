import React from "react";
import './add.css';


const Add =({addNewTask})=>{
    return(
        <div>
            <button id="change" className="add" onClick={addNewTask}>+</button>
           
        </div>
    )
}
export default Add;