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

    console.log("rendering the selected-customer lozenge")
    console.log("Hoping this logs something about a customer")
    console.log("this is what's in the props")
    console.log(this.props.cmrName)
    console.log("this is what's in the state")
    console.log(this.state)

    return (
      <div className="selected-customer-container">
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
  cmrName: PropTypes.string.isRequired,
};

export default SelectedCustomer;
