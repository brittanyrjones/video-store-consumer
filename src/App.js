import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

import './App.css';
import Search from './components/Search'
import Customers from './components/Customers'
import Library from './components/Library'
import SelectedCustomer from './components/SelectedCustomer'
import SelectedMovie from './components/SelectedMovie'

class App extends Component {

  render() {

    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/search">Search</Link>
            </li>
            <li>
              <Link to="/library">Library</Link>
            </li>
            <li>
              <Link to="/customers">Customers</Link>
            </li>
              < SelectedCustomer />
            <li>
            </li>
              < SelectedMovie />
            <li>
            </li>
              PLACEHOLDER FOR RENTAL MATCHER
            <li>
            </li>
          </ul>
          <hr />
          <Route path="/search" component={Search} />
          <Route path="/library" component={Library} />
          <Route path="/customers" component={Customers} />
        </div>
      </Router>
    );
  }
}
export default App;
