import React, { Component } from 'react';
import header from '../Main Content/header-bg.jpg';
import '../Main Content/Main.css';

export default class Main extends Component {
    render(){
        return <div className='main-container'>
            <img src={header} alt="desk items"/>
            <h2>Welcome To Our Studio</h2>
            <h1>It's nice to meet you</h1>
            <button>tell me more</button>
   
        </div>
    }
}