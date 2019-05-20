import React,  { Component } from "react";
import "./TravelDescription.css";


// How to properly import a stylesheet??


export default class TravelDescription extends Component {
  constructor(props){
    super(props)
    this.state = {
      userInput: "",
      id: 0,
     
    }
  }

  updateUserInput = (input) => {
    console.log(input)
    this.setState({
      userInput: input.target.value
    })
  }



  // console.log("This Props from TravelDescription", props)
  render(){
  // console.log(this.props)
    return (


      <div>
       

          {!this.props.favorite ? (
            <div className="traveldescription-description-box">
             <img className="traveldescription-img-design" src={this.props.url} alt="location" />
             <span className="traveldescription-title-design">{this.props.location}</span>
             <p className="traveldescription-text-design">{this.props.description}</p>
              <button className="traveldescription-button-design" onClick={() => this.props.addToFavorites(
              this.props.location,
              this.props.url,
              this.props.description,
              this.props.favorite,
            )}>Add</button>
            </div>
            ) 
            : 
            (
            
            <div className="traveldescription-description-box" style={{ height: 300}} >
            <img className="traveldescription-img-design" src={this.props.url} alt="location" />
            <span className="favorites-title-design">{this.props.location}</span>
            <p className="favorites-text-design">{this.props.userInput}</p>
            <input className="favorites-input-design" type="text" value={this.state.userInput} onChange={event => this.updateUserInput(event)} />
  
            <button className="favorites-button-design" onClick={() => this.props.submitInput(
              this.props.id,
              this.state.userInput
  
              )}>Submit</button>

              <button className="traveldescription-button-design" onClick={() => this.props.deleteFromFavorites(
            
              )}>Delete</button>
            
            </div>
            
            )
           
          }
  </div>



)
}
}
