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

class App extends Component {

  constructor() {
    super();
    this.state = {
      selectedMovie: null,
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
              PLACEHOLDER FOR MOVIE SPOTLIGHT
            <li>
            </li>
              PLACEHOLDER FOR RENTAL MATCHER
            <li>
            </li>
          </ul>
          <hr />
          <Route
              path="/search"
              component={Search}
               />
          <Route
              path="/library"
              component={Library}
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
