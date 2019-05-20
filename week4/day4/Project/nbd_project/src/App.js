import React, { Component } from 'react';
import axios from 'axios';
import Header from "./Header/Header";
import TravelDescription from "./TravelDescription/TravelDescription";
import './App.css';

class App extends Component {
  constructor(){
    super()
     this.state = {
         travelList: [],
         favoritesList: [],
         userInput: ""
     }
    // BIND THIS
    this.getTravelList = this.getTravelList.bind(this);
    this.addToFavorites = this.addToFavorites.bind(this);
    this.deleteFromFavorites = this.deleteFromFavorites.bind(this);
    this.submitInput= this.submitInput.bind(this);
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
        // console.log("GET END", this.state.travelList)

    });
  }

   addToFavorites(location, url, description, favorite) {
     // CREATE THE BODY OBJECT WITH LOCATION URL AND DESCRIPTION AS PROPS
     const body = {location, url, description, favorite}
     // HITTING API ON THE BACK IN PASSING THE BODY
    axios.post('/api/travel', body).then(response => {
      console.log("RESPONSE", response)
      this.setState({
        favoritesList: response.data
      })
    })
    console.log("ADD END", this.state.favrotiesList)
  }
    
  deleteFromFavorites(id){
    axios.delete(`/api/travel/${id}`).then(response => {
      this.setState({
        favoritesList: response.data
      })
    })

  }



  submitInput= (id, userInput) =>{
    console.log(id, userInput)
    axios.put(`/api/travel/${id}?user_input=${userInput}`).then( (response) => {
      this.setState({
       favoritesList: response.data
      })
    })
  }




  render(){
    const { travelList } = this.state;
    const { favoritesList } = this.state;
    // console.log("This is the render",  favoritesList)

    const mappedFavoritesList = favoritesList.map(element => {
    return (
   
    <TravelDescription
     url={element.url}
     location={element.location}
     userInput={element.user_input}
    //  description={element.description}
  
   
     submitInput={this.submitInput}
     id={element.id}
     deleteFromFavorites = {this.deleteFromFavorites}
     favorite={element.favorite}

  
     />
      )
     
    })

    const mappedTravelDescriptions = travelList.map(element => {
      // console.log("ELEMENT", element)
    return (
    
    <TravelDescription 
     url={element.url}
     location={element.location}
     description={element.description} 
     addToFavorites ={this.addToFavorites}
     id={element.id}
     favorite={element.favorite}
     />

    );
    });

    return (
  
    <div>
    < Header />
    <div className="favoriteslist-container"> {mappedFavoritesList}</div>
    <div className="traveldescription-container"> {mappedTravelDescriptions}</div>
    </div>
    )

  }
}
  

export default App;
