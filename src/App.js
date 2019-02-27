import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MenuSuperior from './components/MenuSuperior/MenuSuperior'
import Resumo from './components/Resumo/Resumo'

class App extends Component {
  render() {
    return (
      <div>
        <MenuSuperior></MenuSuperior>
        <Resumo></Resumo>
      </div>
    );
  }
}

export default App;
