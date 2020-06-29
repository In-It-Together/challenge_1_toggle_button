import React, { useState } from "react";
import Switch from "./components/Switch";

function App() {
  const[state, setState] = useState(false);

  return (
    <div className="App">
      <Switch 
        buttonOn={ state }
        handleToggle={ () => setState(!valueOn) }
      />
    </div>
  );
}

export default App;
