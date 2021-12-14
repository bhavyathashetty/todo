import React from 'react';
import './App.css';
import Input from './components/Input/Input';
import Add from './components/Button/Add';
import Edit from './components/Button/Edit';
import { useState, useEffect } from 'react';
import Delete from './components/Button/Delete';


function App() {
  const [userInput, setUserInput] = useState('');
  const [todoList, setTodoList] = useState(() => {
    const savedtodo = localStorage.getItem('todos');
    if (savedtodo) {
      return JSON.parse(savedtodo)
    }
    else {
      return [];
    }
  })
  
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todoList))
  }, [todoList])


 
  const handleInputChange = (e) => {
    setUserInput(e.target.value)
  }


  const addNewTask = () => {
    if (userInput !== '') {
      setTodoList(todoList.concat(userInput))
      setUserInput('')

    }
    document.getElementById('change').innerHTML = '+'
  }



  const deleteTodo = (todo) => {
    // console.log(todo)
    const newList = todoList.filter((item) => item !== todo);
    setTodoList(newList);

  }

  const editTodo = (todo) => {
    setUserInput(todo)
    const newList = todoList.filter((item) => item !== todo);
    setTodoList(newList);
    document.getElementById('change').innerHTML = 'Edit'

  }


  return (
    <div className="App">
      <h1>ToDo-List</h1>
      <div className='input'>
        <Input userInput={userInput} handleInputChange={handleInputChange} />
        <Add addNewTask={addNewTask} />
      </div>
      {todoList.map(todo => {
        return (
          <div>
            <ul className='list' >
              <li> {todo}</li>
              <div className='input'>
                <Edit editTodo={editTodo} todo={todo} />
                <Delete deleteTodo={deleteTodo} todo={todo} />
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
