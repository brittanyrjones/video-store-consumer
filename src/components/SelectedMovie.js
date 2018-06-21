import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './SelectedMovie.css';

class SelectedMovie extends Component {

  render() {

    console.log("rendering the selected movie lozenge")

    return (
      <div className="selected-movie-container">
        <div className="upperLabel">
          SELECTED MOVIE
        </div>
        <div className="movie-info">
          <h2 className="customer-info_name">{this.props.mviTitle}</h2>
        </div>
      </div>
    )
  }
}

SelectedMovie.propTypes = {
  mviTitle: PropTypes.string.isRequired,
};

export default SelectedMovie;
