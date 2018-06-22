import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchForm from './SearchForm'
import Movie from './Movie'
import axios from 'axios';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class Search extends Component {
  constructor() {
    super();
    this.state = {
      results: [],
    };
  }

  movieSearch = (title) => {
    const BASE_URL = 'http://localhost:3000/movies?query='

    axios.get(`${BASE_URL}${title}`)
    .then((response) => {
        const movieSearchList = response.data.map((result, index) => {
        return (
          <Movie
            title={result.title}
            overview={result.overview}
            release_date={result.release_date}
            image={result.image_url}
            key={index}
            externalId={result.external_id}
                      />
        )
      })

      this.setState({
        results: movieSearchList,
      });
    })
     .catch((error) => {
       this.setState({ message: error.message });
    });

  }

  showMessage = () => {
    if (this.state.message) {
     return (this.state.message)
   }
  }

  render() {

    return (
      <section className="movie-search-list">
        <p>{this.showMessage()}</p>
        <SearchForm searchCallback={this.movieSearch} />
        {this.state.results}
      </section>
    );
  }
}

export default Search;
