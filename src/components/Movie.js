import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios'

class Movie extends Component {


  constructor(props) {
    super(props);

    this.state = {
      movie: {
        title: this.props.title,
        release_date: this.props.release_date,
        overview: this.props.overview,
        image_url: this.props.image_url,
      }
    }
  }

  static propTypes = {
    searchMovieCallback: PropTypes.func.isRequired,
    index: PropTypes.number,
    title: PropTypes.string.isRequired,
    overview: PropTypes.string,
    release_date: PropTypes.string,
    image_url: PropTypes.string,
    selectedMovieCallback: PropTypes.func.isRequired,
    buttonName: PropTypes.string,


  }

    addToLibrary = (movie) => {
      const movies = this.state.movies;

      axios.post('http://localhost:3000/movies',movie)
        .then((response) => {
          movies.push(movie);
          this.setState({
            movies,
            message: `Successfully Added ${movie.title}`
          })
        })
        .catch((error) => {
          this.setState({
            error: error.message
          })
        })
    }

    renderButton = () => {
    if (this.props.buttonName == "Select Movie for Rental") {
      return <button onClick={this.selectedMovieCallback} >{this.props.buttonName}</button>
    } else if (this.props.buttonName == "Add Movie to Rental Library") {
      return <button onClick={this.addToLibrary} >{this.props.buttonName}</button>
    }
  }

  render(){
    return(
      <div>
        <section className="results">
          <h2>{this.props.title}</h2>
          <p>{this.props.release_date}</p>
          <div className="movie-image">
            <img src={this.props.image_url} />
            {this.renderButton()}


          </div>
        </section>

      </div>

    );
  }
}

export default Movie;
