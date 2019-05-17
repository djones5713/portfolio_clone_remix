
# no db planning sesh 

## Frontend Check List
- RESET.css
- package.json
    - main 
    - proxy
        - port: 5000
## Frontend Folder Structure
- src/ 
 - App.js
 - index.js
 - components/
    - Header/ 
        - Header.js/
        - Header.css/
    - SearchBar/
        - Search.js
        - Search.css
-----------------------------------------------------------------
<!-- Parent -->


Map with parent 
    - Locations/ 
        - LocationsDisplayer.js
        - LocationsDisplayer.css

Objective: 
- Create a list to add your favorite destinations 

Functionality: 

- Create a Class Component 
- Within Class Component create a constructor and initalize state 
- Create an empty array inside of initalize state 
- Create function to map over travel.json 
- Create onClick handler 
- Create a render method that returns TravelDescription and Add button 

Code: 

import Travel from "../travel.json"
import React, { Component } from "react";
import TravelDescription from "./TravelDescription";

export default class LocationsDisplayer extends Component {
    constructor(){
    super()
     this.state = {
         travelList = [ ];
     }
   <!-- Binding -->
    }
    
    <!-- componenetDidMount(){

    } -->


    render(){
    const { travelList } = this.state;
    const mappedTravelDescriptions = travelList.map(element => {
    return (

    <TravelDescription
     location={element.location}
     url={element.url}
     description={element.description}
     />
    );
    });
    return (
        <div>
        <div>mappedTravelDescriptions</div>
        </div>
    )

}

<!-- Child -->
     - TravelDescription/
        - TravelDescription.js
        - TravelDescription.css


Objective: 
- Render on Parent 

Functionality: 
- Create a render method that will display data location, url, description 

import React, { Component } from "react";
import LocationsDisplayer from "./LocationsDisplayer ";

class TravelDescription extends Component {
    constructor(props){
    super(props)
    }

    render(){
        const {
            location,
            url
            description,
        } = this.props;

        return(
        <div>

          <span>{location}</span>
          <img src={url} alt="location" />
          <p>{description}</p>
          
        </div>
        )
    }
}



-----------------------------------------------------------------
    - TravelerList/
       - TravelList.js
       - TravelList.css
        


## Dependencies
`axious` // Communicate to the API 

## Backend Check List

port = 5000

## Backend Folder Structure
- server/
    - travel.json
    - index.js
    - controller/
        - TravelController.js

## Dependencies 
`espress`
`nodemone`
## Routes 

- Travel Data Routes 

get: '/api/travel'  <!-- This gets everything  -->
get: '/api/travel/:name'  <!--This gets specific location -->



----------------------------------------------

-  Traveler List 

post: '/api/travel/:id'  
put: '/api/travellist/:id'
delete: '/api/travellist/:id'