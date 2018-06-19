import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Movie extends Component {
  static propTypes = {
    searchMovieCallback: PropTypes.func.isRequired,
    index: PropTypes.number,
    title: PropTypes.string.isRequired,
    overview: PropTypes.string,
    releaseDate: PropTypes.string,
    image: PropTypes.string,
  }

  constructor() {
    super();
    this.state = {
      query: ""
    };
  }

  render(){
    return(
      <div>
        <section className="results">
          <h2>{this.props.title}</h2>
          <p>{this.props.releaseDate}</p>
          <div className="movie-image">
            <img src={this.props.image} />
          </div>





        </section>

      </div>
    );
  }
}

export default Movie;
