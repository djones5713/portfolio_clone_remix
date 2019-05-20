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
    console.log(favorites)
  },

  //  updateTravelNotes: (req, res, next ) => {
  //    let {id, user_input } = req.params;
  //    let index = favorite.findIndex(favorite => favorite.id === parseInt(id));
     
  //    if(index !== -1){
  //      favorites[index].user_input = user_input;
       
  //      res.status(200).send(favorites);
  //    } else {
  //     res.status(100).send("NOT FOUND", favorites);
  //    }
  //   console.log(user_input)
  //   console.log(favorites)
  // },

  updateTravelNotes: (req, res, next ) => {
    const {id } = req.params;
    // must match query to axios put call in the front
    let { user_input } = req.query;
    let index = favorites.findIndex(favorite => favorite.id == id);
    console.log(user_input, id)
    if(index !== -1){
      favorites[index].user_input = user_input;
      console.log(favorites)
      res.status(200).send(favorites);
    } else {
     res.status(100).send("NOT FOUND", favorites);
    }
  //  console.log(user_input)
  //  console.log(favorites)
 },

    deleteFromTravelCollection: (req, res, next) => {
      
      const id= req.params;      
      favoriteIndex = favorites.findIndex(favorite => favorite.id == id);
      favorites.splice(favoriteIndex, 1);
      res.status(200).send(favorites);
    }
   
  }

 

