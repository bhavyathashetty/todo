import React from "react";
import { useState, useEffect } from "react";
import Add from "../AddButton/Add";
import './input.css'

const Input = () => {
    const [todolist, addtask] = useState(() => {
        const savedtodo = localStorage.getItem('todos');
        if (savedtodo) {
            return JSON.parse(savedtodo)
        }
        else {
            return [];
        }
    })

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todolist))
    }, [todolist])

    const addnewtask = () => {
        if (userInput !== '') {
            addtask(todolist.concat(userInput))
            setUserInput('')

        }
    document.getElementById('change').innerHTML='+'
    }

    const [userInput, setUserInput] = useState('');
    const handleInputChange = (e) => {
        setUserInput(e.target.value)
    }

    const deletetodo = (todo) => {
        // console.log(todo)
        const newList = todolist.filter((item) => item !== todo);
        addtask(newList);

    }

    const edittodo = (todo) => {
        setUserInput(todo)
        const newList = todolist.filter((item) => item !== todo);
        addtask(newList);
        document.getElementById('change').innerHTML='Edit'
        
    }
  
    

    return (
        <div>
            <div className='input'>
                <input placeholder="What do you want to do?" value={userInput}
                    onChange={handleInputChange}
                />
                <Add addnewtask={addnewtask} />
            </div>
            {todolist.map(todo => {
                return (
                    <div>
                        <ul className='list' >
                            <li> {todo}</li>
                            <div>
                                <button className="edit" onClick={() => edittodo(todo)}>Edit</button>
                                <button className="delete" onClick={() => deletetodo(todo)}>Delete</button>
                            
                            </div>
                        </ul>
                        <hr></hr>
                    </div>
                )
            })}
        </div>
    )
}


export default Input;

