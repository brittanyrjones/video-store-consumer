import React, { Component } from 'react';
import axios from 'axios';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

import './App.css';
import Search from './components/Search'


class App extends Component {
  render() {

    const home = () => {
      return (<p>Video Store Consumer</p>);
    };

    return (
        <Router>
          <section>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/search">Search</Link></li>

            </ul>

            <hr/>

            <Route exact path="/" component={home}/>
            <Route path="/search" render={()=><Search searchCallback='Submit'/>}/>


          </section>
        </Router>
    );
  }
}

export default App;