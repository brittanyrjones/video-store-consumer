import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Search extends Component {
  static propTypes = {
    searchMovieCallback: PropTypes.func.isRequired
  }

  constructor() {
    super();
    this.state = {
      query: ""
    };
  }

  onInputChange = (event) => {
    const key = event.target.name;
    let value = event.target.value;

    let updatedInput = {};
    updatedInput[key] = value;
    this.setState(updatedInput);
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.searchMovieCallback(this.state);
    this.setState({
      query: ''
    });
  }

  render() {
    return(
      <div>
      <form onSubmit={this.onFormSubmit} className='movie-search-bar'>
      <input
      type="text"
      name="query"
      placeholder="Search by Movie Title"
      onChange={this.onInputChange}
      value={this.state.query}
      />
      <input type="submit"/>
      </form>
      </div>
    );
  }
}

export default Search;
