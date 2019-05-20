import React from "react";
import Style from "./TravelDescription.css";

// How to properly import a stylesheet??


export default function TravelDescription(props) {
  // console.log("TravelDescription", props)
  const {
    
    favorite,
    location,
    url,
    description,
    id

  } = props;

  // console.log("This Props from TravelDescription", props)
  return (


    <div className="traveldescription-description-box">
      <img className="traveldescription-img-design" src={url} alt="location" />
      <span className="traveldescription-title-design">{location}</span>
      <p className="traveldescription-text-design">{description}</p>


      {!props.favorite ? (
        <button className="traveldescription-button-design" onClick={() => props.addToFavorites(
        location,
        url,
        description,
        favorite
      )}>Add</button>
      ) 
      : 
      (
  
      <div>
        <input 
    
        placeholder="Add Comment" />


       <button 
      //  onClick={() => props.updateFavoriteById(id, props.new_input)}
       >
        Submit</button>

        <button className="traveldescription-button-design" onClick={() => props.deleteFromFavorites(
        location,
        url,
        // description

      )}>Delete</button>

      </div>
      )

      }




    </div>

    
  )

}
