import React, { useEffect, useState } from "react";
import "./App.css";
import { ZAPI } from "./constants";
import { debounce } from "lodash-es";

function App() {
  const [collections, setCollections] = useState([]);
  const fetchCollections = () => {
    console.log("fecthing");
    fetch(ZAPI)
      .then(res => res.json())
      .then(({ response }) => {
        console.log(response.collections);
        setCollections(response.collections);
        window.collections = response.collections;
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

  const handler = event => {
    event.persist();
    debouncedSearch(event);
  };

  const debouncedSearch = debounce(filterCollections, 200);

  return (
    <div className="App">
      Zomato Collections
      <div>
        <input type="text" onChange={handler} />
        <ul>
          {collections.length
            ? collections.map((item, index) => (
                <li key={index}>{item.title}</li>
              ))
            : null}
        </ul>
      </div>
    </div>
  );
}

export default App;
