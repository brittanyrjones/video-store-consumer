import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Movie from './Movie';
import axios from 'axios';


class Library extends Component {

  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      moviePicked: "Legends of De Fault"
     }
  }

  componentDidMount() {
    axios.get('http://localhost:3000/movies')
    .then((response) => {
      this.setState({ movies: response.data });
    })
    .catch((error) => {
      this.setState({
        error: error.message
      })
    });
  }

  selectedMovieCallback = (selectedMovie) => {
    console.log('The callback to Library is happening')
    console.log('This is what got passed: ')
    console.log(selectedMovie)
    this.setState({
      moviePicked: selectedMovie })
    this.props.selldFilmToApp(selectedMovie)
  }

  renderMovieList = () => {
    const componentList = this.state.movies.map((movie,index) => {
      return (
        <Movie
          key={index}
          title={movie.title}
          overview={movie.overview}
          release_date={movie.release_date}
          inventory={movie.inventory}
          image={movie.image_url}
          selectedMvCallback = {this.selectedMovieCallback}
        />
      );
    });

    return componentList
  }

  render () {
    let errorMessage

    if (this.state.error) {
      errorMessage = <p>{this.state.error}</p>
    }

    let message

    if (this.state.message) {
      message = <p>{this.state.message}</p>
    }

    return (
      <section>
        {errorMessage}
        {message}
        {this.renderMovieList()}
      </section>
    )
  }
}


export default Library;

Library.propTypes = {
  selldFilmToApp: PropTypes.func.isRequired,
};
