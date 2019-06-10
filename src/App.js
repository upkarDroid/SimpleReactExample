import React, { useEffect, useState } from "react";
import "./App.css";
import Collections from "./ListComponent/Collections";

function App() {
  return (
    <div className="App">
      <h1>Zomato Collections</h1>
      <Collections />
    </div>
  );
}

export default App;
