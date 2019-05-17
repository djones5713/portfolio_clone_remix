import React, { Component } from 'react';

export default class TravelersFavorite extends Component {
    constructor(){
    super()
        this.state = {
            favoritesList: []
        }

    }

    // deleteFromFavorite ( id ){
    //     if
    // }
    
    render(){
        const {
            location,
            url,
            description,
        } = this.props;
    
      return (
          <div>
          <span>{location}</span>
          <img src={url} alt="location" />
          <p>{description}</p>
          {/* <button onClick={}>Delete</button> */}
          </div>
      )
    }
}