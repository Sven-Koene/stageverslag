import React from 'react';
//import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import './App.css';

import SideBar from "./Components/sidebar";
import Home from "./Components/Home";
import Intro from "./Components/Introductie";
import Ondernemen from "./Components/Ondernemen";
import Ontwikkelen from "./Components/Ontwikkelen";
import Onderzoeken from "./Components/Onderzoeken";
import Ontwerpen from "./Components/Ontwerpen";
import Betrokken from "./Components/Betrokken";
import Bedrijf from "./Components/Bedrijf";

function App() {
  return (
    <div id="App">
      <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} />
      <div id="page-wrap">
        <Router>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/Introductie" component={Intro}/>
            <Route path="/Ondernemen" component={Ondernemen}/>
            <Route path="/Ontwikkelen" component={Ontwikkelen}/>
            <Route path="/Onderzoeken" component={Onderzoeken}/>
            <Route path="/Ontwerpen" component={Ontwerpen}/>
            <Route path="/Betrokken" component={Betrokken}/>
            <Route path="/Bedrijf" component={Bedrijf}/>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
