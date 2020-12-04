// API CALL
import axios from "axios";
import { useEffect, useState } from "react";
import { baseURL, config } from "./services";

// PAGE NAVIGATION
import { Switch, Route } from "react-router-dom";

// COMPONENTS
import './App.css';
import Nav from "./components/Nav";
import CigarList from "./components/CigarList";
import Home from "./components/Home"


function App() {

  const [cigarData, setCigarData] = useState([])
  console.log(cigarData);

  useEffect(() => {
    const getCigars = async () => {
      const resp = await axios.get(baseURL, config);
      setCigarData(resp.data.records);
    }
    getCigars();
  },[])

  return (
    <div className="App">
      {/* HEADER */}
      <div>
        <header>
          <Nav/>
        </header>
      </div>
      <Switch>
      {/* NEW REVIEW */}

      {/* CIGAR REVIEW DETAIL */}

      {/* CIGAR LIST */}
        <Route path="/cigars">
          <CigarList cigarData={cigarData} />
        </Route>
      {/* HOME */}
        <Route path="/">
          <Home/>
        </Route>  
      </Switch>
      {/* FOOTER */}
      <div>
        <footer>
        </footer>
      </div>
      
    </div>
  );
}

export default App;
