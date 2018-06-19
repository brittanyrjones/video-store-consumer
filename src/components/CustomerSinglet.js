import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import './CustomerSinglet.css';

class CustomerSinglet extends Component {

  constructor(props) {
    super();
    this.state = {
      custId: props.ident,
      custName: props.name,
      custRegisteredAt: props.registeredAt,
      custCity: props.city,
      custRentals: props.rentals,
    }
  }
  render() {
    return (
      <div className="oneCustomer">
        <div className="customer-info">
          <h1 className="customer-info_name">{this.state.custName}</h1>
          <h3 className="customer-info_regdate">Member since: {this.state.custRegisteredAt}</h3>
          <h3 className="customer-info_city">City: {this.state.custCity}</h3>
          <h4 className="customer-info_rentals">Movies checked out: {this.state.custRentals.length}</h4>
        </div>
      </div>
    )
  }
}

CustomerSinglet.propTypes = {
  ident: PropTypes.number,
  name: PropTypes.string,
  registeredAt: PropTypes.string,
  city: PropTypes.string,
  rentals: PropTypes.number,
};

export default CustomerSinglet;
