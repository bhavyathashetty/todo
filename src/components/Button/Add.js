import React from "react";
import './add.css';



const Add =({addNewTask,box})=>{
    return(
        <div>
            <button ref={box} id="change" className="add" onClick={addNewTask}>+</button>
           
        </div>
    )
}
export default Add;