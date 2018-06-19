import React, { Component } from 'react';
import axios from 'axios';

class Customers extends Component {
  constructor() {
    super();
    this.state = {
      customersList: [],
    };
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
    return this.state.customersList.map((customersInfo) => <li key={customersInfo.id}>{customersInfo.name}</li>);
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
