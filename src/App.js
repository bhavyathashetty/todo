import React from 'react';
import './App.css';
import Input from './components/Input/Input';
import { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import Button from './components/Button/Button';




function App() {
  const uid = uuid();
  const [editToggle, setEditToggle] = useState(false)
  const [userInput, setUserInput] = useState('');
  const savedTodo = JSON.parse(localStorage.getItem('todos') || '[]');
  // const initialTodo =[{id:1,todo:"Eat"},...savedTodo];
  // const [todoList, setTodoList] = useState(initialTodo)
  const [todoList, setTodoList] = useState(savedTodo);
  


  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todoList))
  }, [todoList])


  const handleInputChange = (e) => {
    setUserInput(e.target.value)
  }


  const handleAddNewTask = (e) => {
    e.preventDefault()
    if (userInput !== '') {
      // let copyTodoList =[...todoList]
      // copyTodoList=[...copyTodoList,{id:uid,todo:userInput}]
      // setTodoList(copyTodoList,...savedTodo)
      setTodoList(todoList.concat({ id: uid, todo: userInput }))
      setUserInput('')
    }
    setEditToggle(false)
  }

  const handleDeleteTodo = (id) => {
    const newList = todoList.filter((item) => item.id !== id);
    setTodoList(newList);

  }

  const handleEditTodo = (id, todo) => {
    setUserInput(todo)
    const newList = todoList.filter((item) => item.id !== id);
    setTodoList(newList);
    setEditToggle(true)
  }


  const crossline = (e) => {
    const element = e.target;
    element.classList.toggle("crossed-line");

  };


  return (
    <div className="App">
      <h1>ToDo-List</h1>
      <form onSubmit={handleAddNewTask}>
        <div className='input'>
          <Input userInput={userInput} handleInputChange={handleInputChange} />
          {editToggle ?
            <Button onClick={handleAddNewTask} className='edit' >Edit</Button> :
            <Button onClick={handleAddNewTask} className='edit'>Add</Button>
          }
        </div>
      </form>


      {todoList.map(({ id, todo }) => {
        return (
          <div key={id} onClick={crossline}>
            <ul className='list'>
              <li> {todo}</li>
              <div className='input'>
                <Button onClick={() => handleEditTodo(id, todo)} className='edit'>Edit</Button>
                <Button onClick={() => handleDeleteTodo(id)} className='delete'>Delete</Button>
              </div>
            </ul>
            <hr></hr>
          </div>
        )
      })}
    </div>
  );

}

export default App;
