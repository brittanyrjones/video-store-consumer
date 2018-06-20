import React, { Component } from 'react';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


class SearchForm extends Component {
  constructor() {
    super();
    this.state = {
      placeholder: 'Search by Movie Title'
    };
  }

  onFieldChange = (event) => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;
    const updateState = {};
    updateState[fieldName] = fieldValue;
    this.setState(updateState);
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.searchCallback(this.state.text);
    this.clearForm();
  }

  clearForm = () => {
    this.setState({
      text: '',
    });
  }


  render() {

    return (
      <section className="movie-search-form">
      <form className="movie-search-form__form" onSubmit={this.onFormSubmit}>
      <div>
      <label htmlFor="text" className="movie-search-form__form-label"> </label>
      <input
      className="movie-search-form__form-textarea"
      name="text"
      value={this.state.text}
      type="text"
      onChange = {this.onFieldChange}
      />
      </div>
      <input type="submit" placeholder="Search by Movie Title" value="Search Movies" className="movie-search-form__form-button" />
      </form>
      </section>
    );
  }
}

export default SearchForm;
