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
import RentalCreator from './components/RentalCreator'

class App extends Component {

  constructor() {
    super();
    this.state = {
      selectedMovie: null,
      selectedCustomerName: null,
      selectedCustomerId: null,
    };
    this.customerChosen = this.customerChosen.bind(this)
    this.movieChosen = this.movieChosen.bind(this)
    this.clearSpotlight = this.clearSpotlight.bind(this)
  }

  customerChosen = (pickedCustomer) => {
    console.log("Here's what got passed in to the callback function from the app:")
    console.log(pickedCustomer)
    console.log("broken out by key:")
    console.log(pickedCustomer.name)
    console.log(pickedCustomer.id)
    this.setState({
      selectedCustomerName: pickedCustomer.name,
      selectedCustomerId: pickedCustomer.id
    });
  }

  movieChosen = (pickedMovie) => {
    console.log("Here's what got passed in to the callback function from the app:")
    console.log(pickedMovie)
    this.setState({
      selectedMovie: pickedMovie
    });
  }

  clearSpotlight = () => {
    console.log("clearSpotlight is running")
    this.setState({
      selectedMovie: null,
      selectedCustomerName: null,
      selectedCustomerId: null,
    });
  }

  render() {

    return (
      <Router>
        <div className="whole-thing">
          <span className="top-bit">
            <h1> A VERY BASIC VIDEO STORE </h1>
          </span>
          <section className="navigation-elements">
            <ul>
              <li className="nav-link">
                <Link to="/search">SEARCH</Link>
              </li>
              <li className="nav-link">
                <Link to="/library">LIBRARY</Link>
              </li >
              <li className="nav-link">
                <Link to="/customers">CUSTOMERS</Link>
              </li>
              <li>
                < SelectedCustomer
                  cmrName={this.state.selectedCustomerName}
                />
              </li>
              <li>
                < SelectedMovie
                  mviTitle={this.state.selectedMovie}
                />
              </li>
              <li>
                  < RentalCreator
                     clearSpotlightCallback = {this.clearSpotlight}
                     customerName={this.state.selectedCustomerName}
                     customerID={this.state.selectedCustomerId}
                     movieTitle={this.state.selectedMovie}
                  />
              </li>
            </ul>
          </section>
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
