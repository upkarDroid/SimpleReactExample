

import React,{useState,useEffect} from "react";
import { ZAPI } from "../constants";
import { debounce } from "lodash-es";







const Collections = () =>{
    const [collections, setCollections] = useState([]);
    const fetchCollections = () => {
        console.log("fecthing");
        fetch(ZAPI)
            .then(res => res.json())
            .then(({response:{collections=[]}}) => {
                console.log(collections);
                setCollections(collections);
                window.collections = collections;
            });
    };
    useEffect(() => {
        fetchCollections();
    }, []);

    
  
    const filterCollections = event => {
        const ntarget = event.target;
        console.log(event.target.value);
        const val = ntarget.value;

        const newCollections = collections.filter(
            item => item.title.indexOf(val) !== -1
        );
        if (!val) {
            setCollections(window.collections);
        } else {
            setCollections(newCollections);
        }
    };

    const debouncedSearch = debounce(filterCollections, 200);

    const handler = event => {
        event.persist();
        debouncedSearch(event);
    };
  
    const clickHandler= url => event => {
        event.preventDefault();
        const finalUrl = url.replace("https://www.zomato.com","http://localhost:8080");
    }






    return (
        <React.Fragment>
            <h1>Zomato Collections</h1>
        <div>
                <input type='text' onChange={handler} />
              <div className='collections__container'>
                  { collections.length && collections.map((item) => renderCollection(item, clickHandler))}
                </div>
            </div>
      </React.Fragment>)
}

export default Collections;

