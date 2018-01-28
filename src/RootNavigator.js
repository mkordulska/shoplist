import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Shoplists from './Shoplists';
import Details from './Details';

const RootNavigator = () => (
  <Router>
    <div>
      <Route path="/" exact="true" component={ Shoplists } children={({ match }) => (<div><Link to="/">Home</Link></div>)}/>
      <Route path="/details/:name" component={ Details } children={({ match }) => (<div><Link to="/details">Details</Link></div>)}/>
    </div>
  </Router>
)

export default RootNavigator;
