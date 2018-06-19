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

  onInputChange = (event) => {
    const key = event.target.name;
    let value = event.target.value;

    let updatedInput = {};
    updatedInput[key] = value;

    console.log(this.state);
    this.setState(updatedInput);
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    console.log("form submit");

    this.props.searchMovieCallback(this.state);
    this.setState({
      query: ''
    });
  }

  render(){
    return(
      <div>
        <section className="results">
          <h2>{this.props.title}</h2>
          <div className="movie-image">
            <img src={this.props.image} />
          </div>
          <p>{this.props.releaseDate}</p>
          <p>{this.props.overview}</p>



        </section>

      </div>
    );
  }
}

export default Movie;
