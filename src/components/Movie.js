import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Movie extends Component {

  constructor() {
    super();
    this.handleSelect = this.handleSelect.bind(this)
  }

  static propTypes = {
    searchMovieCallback: PropTypes.func,
    selectedMvCallback: PropTypes.func,
    index: PropTypes.number,
    title: PropTypes.string.isRequired,
    overview: PropTypes.string,
    release_date: PropTypes.string,
    image: PropTypes.string,
    externalID: PropTypes.string,
    librarySource: PropTypes.bool,
  }

  handleSelect = event => {
    event.preventDefault();
    console.log("Selected a movie! Woo!")
    console.log(this.props.title)
    console.log(this.props.index)
    this.props.selectedMvCallback(this.props.title)
  }


  render(){

    let fromLib;
    if (this.props.librarySource) {
      fromLib = "yes"
    }


    console.log("rendering a single movie")


    if (this.props.librarySource) {
      console.log("librarySource is present")
    } else { console.log ("no librarySource")}



    if (fromLib == "yes") {
        return (
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
        )
      } else {
        return (

          <div>
            <section className="results">
              <section className="movie-info">
                <h2>{this.props.title}</h2>
                <p>{this.props.release_date}</p>
                <div className="movie-image">
                  <img src={this.props.image} />
                </div>
              </section>
            </section>
          </div>
        )
      }
    }
}

export default Movie;
