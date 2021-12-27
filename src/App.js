import React from 'react';
import './App.css';
import { useState } from 'react';
// import { v4 as uuid } from 'uuid';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Navigation from './components/Navigation/Navigation';
import Todo from './pages/Todo/Todo';

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link,useNavigate
// } from "react-router-dom"



function App() {
  // const uid = uuid();
  const [userid, loadUser] = useState('')
  const [todoid, loadTodoId] = useState('')
  const [todo, setTodo] = useState('')
  const [username, setUserName] = useState('');
  const [useremail, setUserEmail] = useState('');
  const [userpassword, setUserPassword] = useState('');
  const [signinEmail, setsignInEmail] = useState('');
  const [signinPassword, setsignInPassword] = useState('')
  const [isSignedIn, setSignedIn] = useState(false);
  const [editToggle, setEditToggle] = useState(false);
  const [userInput, setUserInput] = useState('');

  const [todoList, setTodoList] = useState([]);
  const [route, onRouteChange] = useState('signin');
  const [editPressed,setEditPressed] = useState(false);
  


//  const handleTodoChange =(e) =>{
//     setTodo(e.target.value)
    
//   }




  // const getTodos = (user) => {
  //   if (user) {
  //     fetch('http:localhost:3000/gettodos', {
  //       method: 'get',
  //       headers: { 'Content-Type': 'application/json' },
  //       params: JSON.stringify({
  //         userid: userid
  //       })
  //     }).then(res => setTodoList(res.json()))
  //   }
  // }

  const handleNamechange = (e) => {
    setUserName(e.target.value)
  }

  const handleEmailChange = (e) => {
    setUserEmail(e.target.value)
  }

  const handlePasswordChange = (e) => {
    setUserPassword(e.target.value)
  }

  const onSubmitSignIn = () => {
    fetch('https://todo-api-bh.herokuapp.com/register', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: username,
        useremail: useremail,
        userpassword: userpassword
      })
    })
      .then(res => res.json())
      .then(user => {
        if (user.userid) {
          setSignedIn(true);
          onRouteChange('home')

          loadUser(user.userid)
        }
      })
    setSignedIn(true);
    onRouteChange('home')

  }

  const handleSEmailChange = (e) => {
    setsignInEmail(e.target.value)
  }

  const handleSPasswordChange = (e) => {
    setsignInPassword(e.target.value)
  }
  const getTodos = () => {
    fetch('https://todo-api-bh.herokuapp.com/gettodos',
      {
        method: 'get',
        headers: { 'Content-Type': 'application/json' }
      }).then(res => console.log(res.json()))
    // .then(todos => {
    //   if (todos) { setTodoList(todos)}
    //   else {
    //     setTodoList([])
    //   }
    // })
  }
  const onLogin = () => {
    fetch('https://todo-api-bh.herokuapp.com/signin', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        signInEmail: signinEmail,
        signInPassword: signinPassword
      })
    })
      .then(res => res.json())
      .then(user => {
        if (user.userid) {
          setSignedIn(true);
          onRouteChange('home');
          loadUser(user.userid)

        }
      })

    setSignedIn(true);
    onRouteChange('home');
  }



  const handleInputChange = (e) => {
    setUserInput(e.target.value)
  }

  
  const handleTodoChange =(e) =>{
    setTodo(e.target.value)
    console.log(todo)
  }



  const handleAddNewTask = (e) => {
    e.preventDefault()
    if (userInput !== '') {
      setUserInput('')
      fetch('https://todo-api-bh.herokuapp.com/todo', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          todo: userInput,
          todouserid: userid
        })
      }).then(res => res.json())
        .then(user => {
          const newlist = todoList.concat({ id: user.id, todo: user.todo })
          
          setTodoList(newlist.sort((a, b) => a.id - b.id))
          loadTodoId(user.id)

        })
    }
    setEditToggle(false)
  }

  const handleEdit = (e) => {
    e.preventDefault()
    if (userInput !== '') {
      setUserInput('')
      fetch('https://todo-api-bh.herokuapp.com/edittodo', {
        method: 'put',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          todo: userInput,
          id: todoid
        })
      })
        .then(res => res.json())
        .then(user => {
          loadTodoId(user.id)
          const newlist = todoList.concat({ id: todoid, todo: user.todo })
          setTodoList(newlist.sort((a, b) => a.id - b.id))
          const newist = newlist.filter((item) => item.todo !==todo);
          setTodoList(newist) 
        })
    }
    setEditToggle(false)
    setEditPressed(false)
  }



  const handleDeleteTodo = (id) => {
    fetch('https://todo-api-bh.herokuapp.com/deletetodo', {
      method: 'delete',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id: id
      })
    })
      .then(res => res.json())
      .then(user => {
        const newList = todoList.filter((item) => item.id !== id);
        loadTodoId(user.id)
        setTodoList(newList);
      })
  }
  


  const handleEditTodo = (id, todo) => {
    setUserInput(todo)
    setTodo(todo)
    loadTodoId(id)
    setEditToggle(true)  
    // if(id){
    //   setEditPressed(true)
    // }
  }




  return (
    <div className='App'>
      <Navigation isSignedIn={isSignedIn} onRouteChange={onRouteChange} setSignedIn={setSignedIn} />
      {/* <Router>
        <Link to="/">Register</Link>
        <Link to="/home">Home</Link>
        <Link to="/signin">SignIn</Link>

        <Routes>
          <Route path="/" exact element={
            <Register
              handleNamechange={handleNamechange} handleEmailChange={handleEmailChange}
              handlePasswordChange={handlePasswordChange} onSubmitSignIn={onSubmitSignIn}
            />}
          >
          </Route>
          <Route path="/signin" exact element={
            <Login
              handleSEmailChange={handleSEmailChange} handleSPasswordChange={handleSPasswordChange}
              onLogin={onLogin} getTodos={getTodos} />}
          >
          </Route>

          <Route path="/home" exact element={
            <Todo handleAddNewTask={handleAddNewTask} setSignedIn={setSignedIn}
              handleDeleteTodo={handleDeleteTodo} handleEditTodo={handleEditTodo} handleInputChange={handleInputChange}
              crossline={crossline} editToggle={editToggle} todoList={todoList} userInput={userInput}
              todoo={todoo} todoid={todoid} handleEdit={handleEdit}
            />}
          >
          </Route>
        </Routes>
      </Router> */}
      {
        route === 'signin' ?
          <Login
            handleSEmailChange={handleSEmailChange} handleSPasswordChange={handleSPasswordChange}
            onLogin={onLogin} getTodos={getTodos} />
          : (route === 'home' ?
            <Todo handleAddNewTask={handleAddNewTask} setSignedIn={setSignedIn}
              handleDeleteTodo={handleDeleteTodo} handleEditTodo={handleEditTodo} handleInputChange={handleInputChange}
               editToggle={editToggle} todoList={todoList} userInput={userInput}
               todoid={todoid} handleEdit={handleEdit} editPressed={editPressed}
              handleTodoChange={handleTodoChange} todo={todo}
            /> 
            : <Register
              handleNamechange={handleNamechange} handleEmailChange={handleEmailChange}
              handlePasswordChange={handlePasswordChange} onSubmitSignIn={onSubmitSignIn}
            />
          )}
    </div>
  );

}

export default App;
