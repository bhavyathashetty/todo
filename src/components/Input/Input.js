import React from "react";
import './input.css'

const Input = ({ userInput, handleInputChange,onkeyup }) => {
   
    return (
        <div className='input'>
            <input placeholder="What do you want to do?" value={userInput} onKeyDown={onkeyup}
                onChange={handleInputChange}
            />
        </div>

    )
}
export default Input;

