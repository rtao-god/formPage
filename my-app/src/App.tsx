import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import InputForm from './components/inputForm/InputForm'
import OperatorsList from './components/multiselect/OperatorsList';
import TableList from './components/table/tableList';

function App() {

  return (
    <div className="App">
      <h1> Department information </h1>
      <InputForm />
      <OperatorsList />
      <TableList />
      <button className="btnSave"> Save </button>
    </div>
  );
}

export default App;
