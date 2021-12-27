import React from "react";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import Draggable from 'react-draggable';
import './Todo.css'




const Todo = ({handleTodoChange,editPressed, handleEdit, handleAddNewTask, handleDeleteTodo, handleEditTodo, handleInputChange, editToggle, crossline, userInput, todoList }) => {
 
  
    return (

        <div>
            <h1>ToDo-List</h1>
            <form type='submit'>
                <div className='input'>
                    <Input userInput={userInput} handleInputChange={handleInputChange} />
                    {editToggle ?
                        <Button  onClick={handleEdit} className='edit' >Edit</Button> :
                        <Button  onClick={handleAddNewTask} className='edit'>Add</Button>
                    }
                </div>
            </form>
            {todoList.map(({ id, todo }) => {
                return (
                    <div key={id}>
                        <Draggable
                            defaultPosition={{ x: 0, y: 0 }}
                            axis="y"
                            grid={[25, 25]}
                            scale={1}
                            position={null}>
                            <div >
                                <ul className='list'>
                                    {editPressed ?
                                    <input placeholder="What do you want to do?" value={todo}
                                                              onChange={handleTodoChange} 
                                    />
                                    :<li><input type="checkbox" /> {todo}</li>
                                    }
                                    <div className='input'>
                                        <Button onClick={() => handleEditTodo(id, todo)} className='edit'>Edit</Button>
                                        <Button onClick={() => handleDeleteTodo(id)} className='delete'>Delete</Button>
                                    </div>
                                </ul>
                            </div>
                        </Draggable>
                    </div>
                )
            })}

        </div>
    )
}

export default Todo;