import React, { Component } from 'react';
import Dashboard from './components/Dashboard/Dashboard';
import Product from './components/Product/Product';
import Card from './components/Card/Card';
import Header from './components/Header/Header';


export default class App extends Component {
  constructor(){
    super()
    this.state = {
      shoppingList: []
    }
  }

  render(){

    return (
    <div>
      <Dashboard />
      <Product />
      <Card />
      <Header />
    </div>
    )
  }
}

