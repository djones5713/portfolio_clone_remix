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
    this.addToFavorites = this.addToFavorites.bind(this);
    this.removeFromFavorites = this.removeFromFavorites.bind(this);
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
    // console.log("Got travel data",location)
    axios.post('/api/travel', location).then(response => {
      this.setState({
        travelList: response.data
      })
    })

  }

   //UPDATE DATA 


   // FUNCTIONS 
 
  addToFavorites( id, location, url, description) {
    let copyFavorites = this.state.travelList.splice(id, 1)
    this.state.favoritesList.push(
      {location, url, description}
    )

    this.setState({
      favoritesList: copyFavorites
    });

    console.log("This is the addToFavorites Function",copyFavorites)

  }

  removeFromFavorites( location, url, description) {
    let copyFavorites = this.state.favoritesList.slice(1,0)
    this.state.travelList.push(
      {location, url, description}
    )

    this.setState({
      favoritesList: copyFavorites
    });

    console.log("This is the addToFavorites Function",copyFavorites)

  }

  
   

  render(){
    const { travelList } = this.state;
    const { favoritesList } = this.state;
    // console.log("This is the render",  favoritesList)
    const mappedFavoritesList = favoritesList.map(element => {
    return (
    <TravelDescription
     location={element.location}
     url={element.url}
     description={element.description}

     />
      )
    
    })

    const mappedTravelDescriptions = travelList.map(element => {
    return (

    <TravelDescription
     location={element.location}
     url={element.url}
     description={element.description}

     addToFavorites ={this.addToFavorites}
     
     />
     
    );
    });

    return (
    <div>
    <div> {mappedTravelDescriptions}</div>
    <div> {mappedFavoritesList}</div>
    </div>
    )

  }
}
  

export default App;
