import React, { useState } from "react";
import Switch from "./components/Switch";
import "./App.css";

function App() {
  // const[valueOff, setValueOff] = useState(true);
  const[valueOn, setValueOn] = useState(false);

  return (
    <div className="App">
      <Switch 
        buttonOn={ valueOn }
        handleToggle={ () => setValueOn(!valueOn) }
      />
    </div>
  );
}

export default App;
