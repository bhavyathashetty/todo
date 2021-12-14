import React from 'react';
import './App.css';
import Input from './components/Input/Input';


class App extends React.Component {
  
  render() {
    return (
      <div className="App">
        <h1>ToDo-List</h1>
        <Input/>
      </div>
    );
  }
}

export default App;
