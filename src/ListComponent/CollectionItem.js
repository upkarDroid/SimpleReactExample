
import React from "react";

const CollectionItem = ({title,id,image,description,num_places}) =>{

return(
  <div className="item" style={{backgroundImage:`url(${image})`}}>
      
      <div className="collection-info">
        <h1 className="collection-title">{title}</h1>
        <h3 className="collection-desc">{description}</h3>
        <span className="collection-places">{num_places} places</span>
      </div>
    </div>
);
}

export default CollectionItem;