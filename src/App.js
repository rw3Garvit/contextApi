import { useState } from "react";
import "./App.css";
import Data from "./components/Data";
import { MyContext } from "./context/Mycontext";

function App() {
  let [mode, setMode] = useState("light");

  return (
    <div className="App">
      <MyContext.Provider value={{ mode, setMode }}>
        <Data />
      </MyContext.Provider>
    </div>
  );
}

export default App;
