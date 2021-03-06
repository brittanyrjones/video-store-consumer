import React, {
  Component,
} from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import CustomerSinglet from './CustomerSinglet';

class Customers extends Component {

  constructor(props) {
    super(props);
    this.state = {
      customersList: [],
      selectedCustName: null,
      selectedCustId: null,
    };
    this.selectedCustCallback = this.selectedCustCallback.bind(this)
  }

  selectedCustCallback = (selectedCustomer) => {
    console.log('The callback to Customers is happening')
    console.log('This is what got passed: ')
    console.log(selectedCustomer)
    this.setState({
      selectedCustName: selectedCustomer.name,
      selectedCustId: selectedCustomer.id})
    this.props.selldCustToApp(selectedCustomer)
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
        rentals = {customersInfo.movies_checked_out_count}
      />
    </li>);
  };

  render() {
    let errorMessage

    if (this.state.error) {
      errorMessage = <p>{this.state.error}</p>
    }

    let message

    if (this.state.message) {
      message = <p>{this.state.message}</p>
    }

    return (
      <section className="customer-section" onClick={this.handleSingletClick}>
        <section className="MessageContainer" >
          {errorMessage}
          {message}
        </section>
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
