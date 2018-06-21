import React, {
  Component,
  PureComponent,
} from 'react';
import PropTypes from 'prop-types';
import './CustomerSinglet.css';


class CustomerSinglet extends Component {

  constructor(props) {
    super();
    this.state = {
      custId: props.ident,
      custName: props.name,
      custCity: props.city,
      custRentals: props.rentals,
    }

  }

  handleSelect = event => {
    event.preventDefault();
    console.log("Selected! Woo!")
    console.log(this.state.custName)
    console.log(this.state.custId)
    this.props.selectedCuCallback(this.state)
    console.log("Here's what Customer Singlet set to its own state:")
    console.log(this.state)
  }

  render() {

    console.log("rendering a customer singlet")

    return (
      <div className="customer-singlet">
        <div className="customer-info">
          <h1 className="customer-info_name">{this.state.custName}</h1>
          <h3 className="customer-info_city">City: {this.state.custCity}</h3>
          <h4 className="customer-info_rentals">Movies checked out: {this.state.custRentals}</h4>
        </div>
        <div className="customer-clickable" onClick={this.handleSelect}>
          Select for Rental
        </div>
      </div>
    )
  }
}

CustomerSinglet.propTypes = {
  ident: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  city: PropTypes.string,
  rentals: PropTypes.number,
  selectedCuCallback: PropTypes.func.isRequired,
};

export default CustomerSinglet;
