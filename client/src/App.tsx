import React from "react";
import Home from "@comps/Home";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

const App = () => (
  <div className="App">
    <Router>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  </div>
);

export default App;
