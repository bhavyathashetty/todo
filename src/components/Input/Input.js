import React from "react";
import './input.css'

const Input = ({ userInput, handleInputChange }) => {
   
    return (
        <div className='input'>
            <input placeholder="What do you want to do?" value={userInput}
                onChange={handleInputChange}
            />
        </div>

    )
}
export default Input;

