import React, { Component, useState } from 'react';
import Form from './components/Form';
import TodoList from './components/TodoList';

import './App.css';

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      {/* Header for all Pages, if more than one page */}
      <header>
        <h3>Todo App - Weekend Learning</h3>
      </header>

      {/* Name can be used to show the logged in user */}
      <div className="App-header">
        <Form 
          inputText = {inputText}
          todos = {todos} 
          setTodos={setTodos} 
          setInputText = {setInputText} />
        <TodoList setTodos={setTodos} todos={todos}  />

      </div>

      {/* Footer for All pages */}
      <footer id="forgot_pwd_txt">
        <p>Created for Diya Interactive AB by <a href="https://mursalfk.github.io" target="_blank">Mursal Furqan</a></p>
      </footer>
    </div>
  );
}
export default App;
