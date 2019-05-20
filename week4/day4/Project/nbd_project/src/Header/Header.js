import React, { Component } from "react";
import Title from "../Title/Title"
import Plane from "../plane.jpg";
import "./Header.css";

export default class Header extends Component {
 render(){
   
     return(
  
  
     <div className="header-container">
     <img className="header-img-design" src={Plane} alt="Plane"/>
    
     <div className="header-searchbar">
     <Title />
         <input className="header-input-design"></input>
         <button className="header-button-design">Search</button>

     </div>

     
     </div>
     )
 }
}