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
    let notes = "Your notes";
    count++
    favorite = true
    favorites.push( {id, location, url, description, favorite, notes });
    res.status(200).send(favorites);
    console.log("POST BACKEND", favorites)
  },

   updateTravelNotes: (req, res, next ) => {
     let {id, new_input } = req.body;
    res.status(200).send(favorites);
    console.log("UPDATE BACKEND", favorites)
  },

    deleteFromTravelCollection: (req, res, next) => {
      
      const id= req.params      
      favoriteIndex = favorites.findIndex(favorite => favorite.id == id);
      favorites.splice(favoriteIndex, 1);
      res.status(200).send(favorites);
    }
   
  }

 

