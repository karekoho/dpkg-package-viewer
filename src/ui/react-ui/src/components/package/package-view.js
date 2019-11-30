import React from 'react';
import {
  BrowserRouter as Router, 
  Switch, 
  Route
} from 'react-router-dom';
import PackageInfo from './package-info'

import PackageList from './package-list'

export default function PackageView() {
  return (
    <Router>
      <div className="PackageView">
        <Switch>
          <Route exact path="/">
            <PackageList />
          </Route>
          <Route exact path="/package/:name" component={ PackageInfo } />
        </Switch>
      </div>
    </Router>
  );
}