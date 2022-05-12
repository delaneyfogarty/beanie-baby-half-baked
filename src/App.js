import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import BeaniesPage from './BeaniesPage';
import BeanieDetail from './BeanieDetail';
import './App.css';

export default function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
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
