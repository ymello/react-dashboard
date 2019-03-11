import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MenuSuperior from './components/MenuSuperior/MenuSuperior'
import Resumo from './components/Resumo/Resumo'
import Consultas from './components/Consultas/Consultas'
import Faturamento from './components/Faturamento/Faturamento'

class App extends Component {
  render() {
    return (
      <div>
        <MenuSuperior></MenuSuperior>
        <Resumo></Resumo>
        <Consultas></Consultas>
        <Faturamento></Faturamento>
      </div>
    );
  }
}

export default App;
