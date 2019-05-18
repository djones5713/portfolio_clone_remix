import React  from "react";

export default function TravelDescription(props) {
console.log("TravelDescription", props)
        const {

          location,
          url,
          description,
        } = props;
        
        // console.log("This Props from TravelDescription", props)
        return(

        <div>
          <span>{location}</span>
          <img src={url} alt="location" />
          <p>{description}</p>

          
          <button onClick={() => props.addToFavorites( 
            location,
            url,
            description
            )}>Add</button>

          {/* <button onClick={() => props.removeFromFavorites( 
            location,
            url,
            description
          )}>Delete</button> */}

        </div>
        
        )
}
