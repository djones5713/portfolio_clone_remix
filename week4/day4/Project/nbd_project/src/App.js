import React, { Component } from 'react';
import axios from 'axios';
import TravelDescription from "./TravelDescription/TravelDescription";
import './App.css';

class App extends Component {
  constructor(){
    super()
     this.state = {
         travelList: [],
         favoritesList: []
     }
    // BIND THIS
    this.getTravelList = this.getTravelList.bind(this);
    this.AddToFavorites = this.AddToFavorites.bind(this);
  }


  // COMPONENTDID MOUNT

  componentDidMount(){
    this.getTravelList();
  }

  //GET ACCESS TO DATA 
  getTravelList(){
    axios.get(`/api/travel`).then(response => {
      // console.log("Got travel data",response)
        this.setState({
          travelList: response.data
        })

    });
  }
  
  //POST NEW DATA 
  postNewDestination(location){
    console.log("Got travel data",location)
    axios.post('/api/travel', location).then(response => {
      this.setState({
        travelList: response.data
      })
    })

  }

   //UPDATE DATA 


   // FUNCTIONS 

   AddToFavorites(location) {
     console.log("LOCATION PASSED:",location)
    this.setState({ 
        favoritesList:location
    })
    console.log("added to favorites list", this.state.favoritesList)
  } 

  //  updateDestination(id, na)

  render(){
    const { travelList } = this.state;
    console.log(this.state.favoritesList)
    const mappedTravelDescriptions = travelList.map(element => {
    return (

    <TravelDescription
     location={element.location}
     url={element.url}
     description={element.description}
     AddToFavorites ={this.AddToFavorites}
     />
  
    );
    });

    return (
    <div>
    <div> {mappedTravelDescriptions}</div>
    </div>
    )

  }
}
  

export default App;
