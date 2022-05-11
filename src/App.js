import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import BeaniesPage from './BeaniesPage';
import BeanieDetail from './BeanieDetail';

export default function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/beanie-babies">
            <BeaniesPage />
          </Route>
          <Route exact path="/beanie-babies/:id">
            <BeanieDetail />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
