import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";



class VideoStore extends Component {
  render() {
    const Home = () => (
      <div>
      <h2>All Movies</h2>
      </div>
    );

    const Search = () => (
      <div>
      <h2>Movie Database Search</h2>
      </div>
    );

    const Library = () => (
      <div>
      <h2>Movie Rental library</h2>
      </div>
    );

    const Customers = () => (
      <div>
      <h2>Customer Library</h2>
      </div>
    );

    return (
      <Router>
      <div>
      <ul>
      <li>
      <Link to="/">Home</Link>
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

      <Route exact path="/" component={Home} />
      <Route path="/search" component={Search} />
      <Route path="/library" component={Library} />
      <Route path="/customers" component={Customers} />
      </div>
      </Router>
    );
  }
}

export default VideoStore;