

import React from "react";


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

  const debouncedSearch = debounce(filterCollections, 200);
  
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

  const handler = event => {
    event.persist();
    debouncedSearch(event);
  };
  
  const clickHandler= url => event => {
    event.preventDefault();
    const finalUrl = url.replace("https://www.zomato.com","http://localhost:8080");
  }






  return (
    <h1>Zomato Collections</h1>
    <div>
      <input type="text" onChange={handler} />
      <div className="collections__container">
        { collections.length && collections.map((item)=>{
         return (<div 
            className="collection" 
           key={item.id} 
          onClick={clickHandler}
          style={{backgroundImage:`url(${item.image})`}}
         ><div className="mask">
              <div className="collection__meta">
                
                <span className="collection__title">{item.title}</span>
                <span className="collection__desc">{item.description}</span>
                <span className="collection__count">{item.num_places}{' '}Places</span>
                </div>
              </div>
        </div>)
        })}
        
      </div>
    </div>)
}