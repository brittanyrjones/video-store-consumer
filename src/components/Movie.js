import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Movie extends Component {
  static propTypes = {
    searchMovieCallback: PropTypes.func.isRequired,
    index: PropTypes.number,
    title: PropTypes.string.isRequired,
    overview: PropTypes.string,
    release_date: PropTypes.string,
    image_url: PropTypes.string,
  }


  render(){
    return(
      <div>
        <section className="results">
          <h2>{this.props.title}</h2>
          <p>{this.props.release_date}</p>
          <div className="movie-image">
            <img src={this.props.image_url} />
          </div>
        </section>

      </div>
    );
  }
}

export default Movie;
