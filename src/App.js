// API CALL
import axios from "axios";
import { useEffect, useState } from "react";
import { baseURL, config } from "./services";

// PAGE NAVIGATION
import { Switch, Route, Link } from "react-router-dom";

// COMPONENTS
import './App.css';
import Nav from "./components/Nav";
import CigarReview from "./components/CigarReview";
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
          <Nav cigarData={cigarData} />
        </header>
      </div>
      <Switch>
      {/* NEW REVIEW */}
        <Route path="/new-review">
          <CigarReview refresh={setToggle} cigarData={cigarData}/>
        </Route>
      {/* EDIT REVIEW */}
        <Route path="/edit/:id">
          <CigarReview refresh={ setToggle} cigarData={cigarData} />
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
          <Home cigarData={cigarData} />
        </Route>
        {/* 404 PAGE */}
        <Route path="/:404">
          <h3> You are on the wrong page!</h3>
          <Link to="/">Go Back Home</Link>
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
