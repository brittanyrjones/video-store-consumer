import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './SelectedCustomer.css';

class SelectedCustomer extends Component {

  constructor(props) {
    super();
    this.state = {
      customerName: "NONE",
      customerID: 0
    }
  }

  render() {

    console.log("rendering the selected-customer lozenge")

    return (
      <div className="selected-customer">
        <div className="upperLabel">
          SELECTED CUSTOMER
        </div>
        <div className="customer-info">
          <h2 className="customer-info_name">{this.state.customerName}</h2>
        </div>
      </div>
    )
  }
}

SelectedCustomer.propTypes = {
  customerName: PropTypes.string.isRequired,
  customerID: PropTypes.number.isRequired,
};

export default SelectedCustomer;
