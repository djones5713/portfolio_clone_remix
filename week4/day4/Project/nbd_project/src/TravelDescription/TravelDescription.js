import React, { Component } from "react";

export default class TravelDescription extends Component {
    constructor(props){
    super(props) 
     this.state = {
         travlerList: []
     }

    }

    
    // addFromFavorite( id ){
      
    // }
  
    render(){
        const {
            location,
            url,
            description,
        } = this.props;
    
        console.log(this.props)
        return(
        <div>
          <span>{location}</span>
          <img src={url} alt="location" />
          <p>{description}</p>
          <button onClick={() => this.props.AddToFavorites(location)}>Add</button>
        </div>
        )
    }
}
