import React, { Component } from 'react';

export default class Card extends Component {
  constructor(props){
      super(props)
      this.state = {
        imageURL: "",
        productName: "",
        price: 0,
  
      }
  }

  updateImageURL = (input) => {
    console.log(input)
    this.setState({
          imageURL: input.target.value
          
    })
  }

  updateProductName = (input) => {
    console.log(input)
    this.setState({
        productName: input.target.value
    })
  }

  updatePrice = (input) => {
    console.log(input)
    this.setState({
        price: input.target.value
    })
  }



  render(){

    return(
    <div>
        <form>
        <input value={this.state.imageURL} onChange={event => this.updateImageURL(event)} />
        <input value={this.state.productName} onChange={event => this.updateProductName(event)}/>
        <input value={this.state.price} onChange={event => this.updatePrice(event)}/>
        <button>Cancel</button>
        <button>Add to Inventory</button>
        </form>
    </div>
    )
  }
}