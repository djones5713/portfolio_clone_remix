import React, { Component } from "react";
import Plane from "../plane.jpg";
import Style from "./Header.css";

export default class Header extends Component {
 render(){
     return(
     <div>
     <img className="header-img-design" src={Plane} alt="Plane"/>
     <div className="header-searchbar">

         <input className="header-input-design"></input>
         <button className="header-button-design">Search</button>

     </div>
     <div className="header-container"></div>
     {/* <h1>Title</h1> */}
     </div>
     
     )
 }
}