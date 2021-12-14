import React from "react";
import './add.css';


const Add =({addnewtask})=>{
    return(
        <div>
            <button id="change" className="add" onClick={addnewtask}>+</button>
           
        </div>
    )
}
export default Add;