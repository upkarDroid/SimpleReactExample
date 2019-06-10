import React, {useState,useEffect} from "react";

import Config from "../Config";
import CollectionItem from "./CollectionItem";

import "./collection.css"

const Collections = () => {
  
const [collection, setCollection] = useState([]);
//const a = [0,function(){}]
// const collection  = a[0]
//const setCollection = a[1]


//componentDidMount
useEffect(()=>{
//Call API to fetch data
fetch(Config.zapi)
.then(response=>response.json())
.then(({response})=>{
  console.log(response.collections)
setCollection(response.collections)
})

//set that data into collection array using "setCollection"
},[]);




  return (
    <React.Fragment>
  <div className="container">
    {collection.map( 
      (item) => <CollectionItem {...item} key={item.id}/>
      )}
    
  </div>
  
  </React.Fragment>
  
  )
}


export default Collections;