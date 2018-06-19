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
import VideoStore from './components/VideoStore'

class App extends Component {
  render() {

    const home = () => {
      return (<p>Video Store Consumer</p>);
    };

    return (
      <Router>
      <div>
      <ul>
      <li>
      <Link to="/">Video Store</Link>
      </li>
      <li>
      <Link to="/search">Search</Link>
      </li>
      <li>
      <Link to="/library">Library</Link>
      </li>
      <li>
      <Link to="/customers">Customers</Link>
      </li>
      </ul>
      <hr />

      <Route exact path="/" component={VideoStore} />
      <Route path="/search" component={Search} />
      <Route path="/library" component={Library} />
      <Route path="/customers" component={Customers} />
      </div>
      </Router>
    );
  }
}
export default App;
