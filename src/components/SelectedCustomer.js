import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './SelectedCustomer.css';

class SelectedCustomer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      customerName: this.props.cmrName
    }
  }

  render() {

    console.log("rendering the selected customer lozenge")

    return (
      <div className="selected-customer-container">
        <div className="upperLabel">
          SELECTED CUSTOMER
        </div>
        <div className="customer-info">
          <h2 className="customer-info_name">{this.props.cmrName}</h2>
        </div>
      </div>
    )
  }
}

SelectedCustomer.propTypes = {
  cmrName: PropTypes.string.isRequired,
};

export default SelectedCustomer;
