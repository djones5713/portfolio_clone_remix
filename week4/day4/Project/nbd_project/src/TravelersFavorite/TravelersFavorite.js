import React, { Component } from 'react';


export default class TravelersFavorite extends Component {
    constructor(){
    super()
        this.state = {
            favoritesList: [],
            user_input: ""
        }

    }


    
    render(){
        const {
            id,
            location,
            url,
            // description,
        } = this.props;
    
      return (
        <div >
        <span>{location}</span>
        <img src={url} alt="location" />
        {/* <p>{description}</p> */}
        <input onChange={e => this.setState({
            new_input: e.target.value})}
            value={this.state.new_input}
        />
        <button onClick={() => updateFavoriteById(id, this.state.new_input)}>
        Add Notes
        </button>

          </div>
      )
    }
}