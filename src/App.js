import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Data from "./components/Data";
import Cool from "./components/Cool";
import Pink from "./components/Pink";
import Purple from "./components/Purple";
import Blue from "./components/Blue";
import Datainfo from "./components/Datainfo";

function App() {
  return (
      <div className="App">
        <Router>
          <Nav/>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/data' component={Data} exact/>
            <Route exact path='/Cool' component={Cool} exact/>
              <Route path="/data/:id?/:name?/:age?/:color?" component={Datainfo}/>
              <Route exact path='/Pink' component={Pink} exact/>
              <Route exact path='/Purple' component={Purple} exact/>
              <Route exact path='/Blue' component={Blue} exact/>





          </Switch>
        </Router>
      </div>
  );
}

export default App;