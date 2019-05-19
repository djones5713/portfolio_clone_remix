import React, { Component } from 'react';


export default class TravelersFavorite extends Component {
    constructor(){
    super()
        this.state = {
            favoritesList: [],
         
        }

    }


    
    render(){
        const {
            location,
            url,
        } = this.props;
    
      return (
        <div >
        <span>{location}</span>
        <img src={url} alt="location" />
   
        </div>
      )
    }
}