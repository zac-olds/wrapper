// API CALL
import axios from "axios";
import { useEffect, useState } from "react";
import { baseURL, config } from "./services";

// PAGE NAVIGATION
import { Switch, Route } from "react-router-dom";

// COMPONENTS
import './App.css';
import Nav from "./components/Nav";
import NewReview from "./components/NewReview"
import CigarList from "./components/CigarList";
import Home from "./components/Home"
import CigarDetail from "./components/CigarDetail";



function App() {

  const [cigarData, setCigarData] = useState([])
  // console.log(cigarData);

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
        <Route path="/new-review">
          <NewReview/>
        </Route>
      {/* CIGAR REVIEW DETAIL */}
        <Route path="/cigars/:id">
          <CigarDetail/>
        </Route>
      {/* CIGAR LIST */}
        <Route path="/cigar/list">
          {cigarData.map((cigar) => (
            <CigarList cigar={cigar} key={cigar.id} />
          ))}
        </Route>
      {/* HOME */}
        <Route exact path="/">
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
