let travelCollection = require("../travel.json");


console.log(travelCollection)

module.exports = {
  getTravelData: (req, res, next) => {
      res.status(200).send(travelCollection);
  },

  postTravelCollection: (req, res, next) => {
    const { id, location, url, description } = req.body;
    travelCollection.push( {id, location, url, description });
    res.status(200).send(travelCollection);
  }




//   updateTravelNotes: (req, res, next ) => {
//     const { id } =  req.params;
//     const { user_input } = req.query;

//     const index = travelCollection.findIndex((element) => {
//       element.id = id
//     });
// // Must remove element description and replace it with input once front end it created 
//     if (index !== -1 ) {
//       travelCollection[index].description = user_input;
//     }
//     res.status(200).send(travelCollection);
  }


