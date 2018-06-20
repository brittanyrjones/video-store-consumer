import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './SelectedMovie.css';


class SelectedMovie extends Component {

  constructor(props) {
    super(props);
    this.state = {
      movieName: this.props.movieTitle
    }
  }

  render() {

    console.log("rendering the selected-movie lozenge")

    return (
      <div className="selected-movie-container">
        <div className="upperLabel2">
          SELECTED MOVIE
        </div>
        <div className="movie-info">
          <h2 className="movie-info_name">{this.state.movieTitle}</h2>
        </div>
      </div>
    )
  }
  }





  SelectedMovie.propTypes = {
    movieTitle: PropTypes.string.isRequired,
  };







export default SelectedMovie
