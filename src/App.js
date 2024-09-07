import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Portfolio from './components/Portfolio';
import PublicPortfolio from './components/PublicPortfolio';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/portfolio/:username" render={(props) => (
          <Portfolio username={props.match.params.username} />
        )} />
        <Route path="/:username" render={(props) => (
          <PublicPortfolio username={props.match.params.username} />
        )} />
      </Switch>
    </Router>
  );
};

export default App;
