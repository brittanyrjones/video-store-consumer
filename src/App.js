import React, {
  Component,
  PureComponent,
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
  }

  customerChosen = (pickedCustomer) => {
    this.setState({
      selectedCust: pickedCustomer
    });
    console.log("Here's what got to the top, customer-wise:")
    console.log(this.state.selectedCustomer)
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
              < SelectedCustomer
                cmrName={this.state.selectedCustomer}
              />
            <li>
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
