// API CALL
import axios from "axios";
import { useEffect, useState } from "react";
import { baseURL, config } from "./services";

// PAGE NAVIGATION
import { Switch, Route } from "react-router-dom";

// COMPONENTS
import './App.css';
import Nav from "./components/Nav";
import NewReview from "./components/NewReview";
import Home from "./components/Home";
import CigarDetail from "./components/CigarDetail";
import CigarMap from "./components/CigarMap";



function App() {

  const [cigarData, setCigarData] = useState([])
  const [toggle, setToggle] = useState(true)
  // console.log(cigarData);

  useEffect(() => {
    const getCigars = async () => {
      const resp = await axios.get(baseURL, config);
      setCigarData(resp.data.records);
    }
    getCigars();
  }, [toggle])

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
          <NewReview refresh={setToggle}/>
        </Route>
      {/* CIGAR REVIEW DETAIL */}
        <Route path="/cigars/:id">
          <CigarDetail refresh={setToggle}/>
        </Route>
      {/* CIGAR LIST */}
        <Route path="/cigar/list">
          <CigarMap cigarData={cigarData}/>
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
