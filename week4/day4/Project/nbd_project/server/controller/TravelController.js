let travelCollection = require("../travel.json");
let favorites = [];
let count = 0; 


// console.log(travelCollection)

module.exports = {
  getTravelData: (req, res, next) => {
      res.status(200).send(travelCollection);
  },

  postTravelCollection: (req, res, next) => {
    // DECONSTRUCTING REQ.BODY & PUSHING TO ARRAY "FAVORIES" & SET INCREASING COUNT BY 1
    // FAVORITES IS PUSHED TO THE FRONT "RESPONSE IN FRONT IS FAVORITES"
    let { location, url, description, favorite } = req.body;
    id = count + 1
    count++
    favorite = true
    favorites.push( {id, location, url, description, favorite });
    res.status(200).send(favorites);
    console.log("POST BACKEND", favorites)
  },

   updateTravelNotes: (req, res, next ) => {
    const { id } =  req.params;
    const { user_input } = req.query;
   

    const index = favorites.findIndex((element) => {
      element.id = id
    });

// Must remove element description and replace it with input once front end it created 
    if (index !== -1 ) {
      favorites[index].description = user_input;
    }
    res.status(200).send(travelCollection);
  },

    deleteFromTravelCollection: (req, res, next) => {
      
      const id= req.params      
      favoriteIndex = favorites.findIndex(favorite => favorite.id == id);
      favorites.splice(favoriteIndex, 1);
      res.status(200).send(favorites);
    }
   
  }

 

