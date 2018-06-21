import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios'

class Movie extends Component {

  static propTypes = {
    searchMovieCallback: PropTypes.func.isRequired,
    selectedMvCallback: PropTypes.func.isRequired,
    index: PropTypes.number,
    title: PropTypes.string.isRequired,
    overview: PropTypes.string,
    release_date: PropTypes.string,
    image: PropTypes.string,
  }

  handleSelect = event => {
    event.preventDefault();
    console.log("Selected a movie! Woo!")
    console.log(this.props.title)
    console.log(this.props.index)
    this.props.selectedMvCallback(this.props.title)
  }

    renderButton = () => {
    if (this.props.buttonName == "Select Movie for Rental") {
      return <button onClick={this.selectedMovieCallback} >{this.props.buttonName}</button>
    } else if (this.props.buttonName == "Add Movie to Rental Library") {
      return <button onClick={this.addToLibrary} >{this.props.buttonName}</button>
    }
  }

  render(){

    console.log("rendering a single movie")

    return(
      <div>
        <section className="results">
          <section className="movie-info">
            <h2>{this.props.title}</h2>
            <p>{this.props.release_date}</p>
            <div className="movie-image">
              <img src={this.props.image} />
            </div>
          </section>
          <div className="movie-clickable" onClick={this.handleSelect}>
            Select for Rental
          </div>
        </section>
      </div>

    );
  }
}

export default Movie;
