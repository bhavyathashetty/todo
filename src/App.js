import React from 'react';
import './App.css';
import Input from './components/Input/Input';
import Add from './components/Button/Add';
import Edit from './components/Button/Edit';
import Delete from './components/Button/Delete';
import { useState, useEffect,useRef } from 'react';




function App() {
  const box = useRef(0)

  const [userInput, setUserInput] = useState('');
  const [count, setCount] = useState(0)
  const savedTodo = JSON.parse(localStorage.getItem('todos') || '[]');
  // const [todoList, setTodoList] = useState([{id:0,todo:'Eat'},{id:1,todo:'Sleep'},...savedTodo])
  const [todoList, setTodoList] = useState(savedTodo);


  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todoList))
  }, [todoList])


  const handleInputChange = (e) => {
    setUserInput(e.target.value)
  }


  const addNewTask = () => {
    if (userInput !== '') {
      // let copyTodoList = [...todoList];
      // copyTodoList = [...copyTodoList, { id: count, todo: userInput }];
      // setTodoList(copyTodoList);

      setTodoList(todoList.concat({ id: count, todo: userInput }))
      setCount(count => count + 1)
      setUserInput('')
    }
    box.current.innerHTML='+'


  }

  const deleteTodo = (id) => {
    const newList = todoList.filter((item) => item.id !== id);
    setTodoList(newList);

  }

  const editTodo = (id, todo) => {
    setUserInput(todo)
    const newList = todoList.filter((item) => item.id !== id);
    setTodoList(newList);
    box.current.innerHTML='Edit'
  }

  const crossLine = (e) => {
    const element = e.target;
    element.classList.toggle("crossed-line");
 
  };

  const onkeyup = (e) => {
    if (e.key === "Enter") {
      addNewTask()
    }
  }

  return (
    <div className="App">
      <h1>ToDo-List</h1>
      <div className='input'>
        <Input userInput={userInput} handleInputChange={handleInputChange} onkeyup={onkeyup} />
        <Add addNewTask={addNewTask} box={box} />
      </div>
      {todoList.map(({ id, todo }) => {
        return (
          <div key={id}>
            <ul className='list' onClick={crossLine}  >
              <li> {todo}</li>
              <div className='input'>
                <Edit editTodo={editTodo} todo={todo} id={id} />
                <Delete deleteTodo={deleteTodo} todo={todo} id={id} />
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
