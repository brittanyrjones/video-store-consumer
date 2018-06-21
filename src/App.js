import React, {
  Component,
} from 'react';

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

  constructor() {
    super();
    this.state = {
      selectedMovie: "DeeeeYeeYeee Fault",
      selectedCustomer: "Lalalala default",
    };
    this.customerChosen = this.customerChosen.bind(this)
  }

  customerChosen = (pickedCustomer) => {
    console.log("Here's what got passed in to the callback function from the app:")
    console.log(pickedCustomer)
    this.setState({
      selectedCustomer: pickedCustomer
    });
  }

  movieChosen = (pickedMovie) => {
    console.log("Here's what got passed in to the callback function from the app:")
    console.log(pickedMovie)
    this.setState({
      selectedMovie: pickedMovie
    });
  }

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
            <li>
              <h3> Temporary for Troubleshooting: Selected Customer from app state:  {this.state.selectedCustomer}
              </h3>
            </li>
            <li>
              < SelectedCustomer
                cmrName={this.state.selectedCustomer}
              />
            </li>
            <li>
              <h3> Temporary for Troubleshooting: Selected Movie from app state:  {this.state.selectedMovie}
              </h3>
            </li>
            <li>
              < SelectedMovie
                mviTitle={this.state.selectedMovie}
              />
            </li>
            <li>
                PLACEHOLDER FOR RENTAL MATCHER
            </li>
          </ul>
          <hr />
          <Route
              path="/search"
              component={Search}
               />
          <Route
              path="/library"
              render={
                (props) => <Library
                    {...props}
                    selldFilmToApp={this.movieChosen}
                    />
                  }
              />
          <Route
              path="/customers"
              render={
                (props) => <Customers
                    {...props}
                    selldCustToApp={this.customerChosen}
                    />
                  }
              />
        </div>
      </Router>
    );
  }
}
export default App;
