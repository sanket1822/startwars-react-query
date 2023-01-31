import { useState } from "react";
import Navbar from "./Components/Navbar";
import Peoples from "./Components/Peoples";
import Planets from "./Components/Planets";


function App() {

  const[page, setPage] = useState("planets")

  return (
    <>
        <div className="App">
          <h1> Starwars</h1>
            <Navbar setPage = {setPage}/>
              <div className="content">
              {page === "planets" ? <Planets/> : <Peoples/>}

              </div>
          </div>
          
    </>
  );
}

export default App;
