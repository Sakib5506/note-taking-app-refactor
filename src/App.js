import logo from './logo.svg';
import './App.css';
import React from 'react';
import Form from './components/Form';
import Display from './components/Display';
import { createContext } from 'react';

function App() {
  return (
    <div className="App">
      <Form/>
      <Display/>
    </div>
  );
}

export default App;
