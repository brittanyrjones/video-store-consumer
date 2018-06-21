import React, {
  Component,
  PureComponent,
} from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import CustomerSinglet from './CustomerSinglet';

class Customers extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      customersList: [],
      selectedCust: null
    };
  }

  selectedCustCallback = (selectedCustomer) => {
    this.setState({
      selectedCust: selectedCustomer
    });
    this.props.selldCustToApp(this.state.selectedCust)
    console.log("Here's what got passed up to Customers through the callback chain:")
    console.log(this.state.selectedCust)
  }

  componentDidMount = () => {
    axios.get(`http://localhost:3000/customers`)
        .then((response) => {
          console.log(response.data);
          this.setState({ customersList: response.data });
        })
        .catch((error) => {
          console.log(error);
          this.setState({ error: error.message });
        });
  };

  renderCustomersList = () => {
    return this.state.customersList.map((customersInfo) =>
    <li key={customersInfo.id} >
      <CustomerSinglet
        selectedCuCallback = {this.selectedCustCallback}
        ident = {customersInfo.id}
        name = {customersInfo.name}
        city = {customersInfo.city}
        rentals = {customersInfo.rentals}
      />
    </li>);
  };

  render() {

    return (
      <section className="customer-section">
        <h3>Customers List</h3>
        <ul>{this.renderCustomersList()}</ul>
      </section>
    );
  }
}

export default Customers;

Customers.propTypes = {
  selldCustToApp: PropTypes.func.isRequired,
};
