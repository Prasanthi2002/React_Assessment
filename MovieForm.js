// Import React and Component class from React library
import React, { Component } from 'react';

// Define the MovieForm class component
class MovieForm extends Component {
  // Lifecycle method: constructor initializes state
  constructor(props) {
    super(props); // Call parent constructor
    console.log('constructor executed'); // Log lifecycle execution

    // Initialize state with form fields and movie list
    this.state = {
      title: '',             // Movie title input
      director: '',          // Director name input
      year: '',              // Release year input
      genre: 'Action',       // Default genre selection
      rating: '',            // Rating input (1–5)
      description: '',       // Movie description
      platforms: {           // Streaming platforms checkboxes
        Netflix: false,
        AmazonPrime: false,
        DisneyPlus: false,
        Others: false
      },
      movies: []             // Array to store submitted movies
    };
  }

  // Lifecycle method: called before render, rarely used for state sync
  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps executed');
    return null; // No state update from props
  }

  // Lifecycle method: runs after component mounts
  componentDidMount() {
    console.log('componentDidMount executed');
  }

  // Lifecycle method: decides whether to re-render
  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate executed');
    return true; // Always re-render
  }

  // Lifecycle method: captures snapshot before update
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate executed');
    return null; // No snapshot needed
  }

  // Lifecycle method: runs after update
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate executed');
  }

  // Lifecycle method: runs before component is removed
  componentWillUnmount() {
    console.log('componentWillUnmount executed');
  }

  // Generic handler for text, number, select, and radio inputs
  handleChange = (e) => {
    const { name, value } = e.target; // Extract name and value
    this.setState({ [name]: value }); // Update corresponding state field
  };

  // Handler for checkbox inputs (streaming platforms)
  handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    this.setState((prevState) => ({
      platforms: {
        ...prevState.platforms, // Preserve other platform states
        [name]: checked         // Update selected checkbox
      }
    }));
  };

  // Handle form submission
  handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload

    // Create movie object from current state
    const movie = {
      title: this.state.title,
      director: this.state.director,
      year: this.state.year,
      genre: this.state.genre,
      rating: this.state.rating,
      description: this.state.description,
      platforms: Object.keys(this.state.platforms).filter(
        (key) => this.state.platforms[key] // Include only checked platforms
      )
    };

    // Add movie to list and reset form fields
    this.setState((prevState) => ({
      movies: [...prevState.movies, movie], // Append new movie
      title: '',
      director: '',
      year: '',
      genre: 'Action',
      rating: '',
      description: '',
      platforms: {
        Netflix: false,
        AmazonPrime: false,
        DisneyPlus: false,
        Others: false
      }
    }));
  };

  // Render method: returns JSX
  render() {
    console.log('render executed'); // Log render lifecycle

    return (
      <div className="card p-4 shadow"> {/* Bootstrap card container */}
        <h4 className="mb-4">🎬 Add a Movie</h4>

        {/* Movie Form */}
        <form onSubmit={this.handleSubmit}>
          {/* Title input */}
          <div className="mb-3">
            <label className="form-label">Movie Title</label>
            <input
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.handleChange}
              className="form-control"
              required
            />
          </div>

          {/* Director input */}
          <div className="mb-3">
            <label className="form-label">Director</label>
            <input
              type="text"
              name="director"
              value={this.state.director}
              onChange={this.handleChange}
              className="form-control"
              required
            />
          </div>

          {/* Release Year input */}
          <div className="mb-3">
            <label className="form-label">Release Year</label>
            <input
              type="number"
              name="year"
              value={this.state.year}
              onChange={this.handleChange}
              className="form-control"
              required
            />
          </div>

          {/* Genre dropdown */}
          <div className="mb-3">
            <label className="form-label">Genre</label>
            <select
              name="genre"
              value={this.state.genre}
              onChange={this.handleChange}
              className="form-select"
            >
              <option>Action</option>
              <option>Comedy</option>
              <option>Drama</option>
              <option>Sci-Fi</option>
              <option>Horror</option>
            </select>
          </div>

          {/* Rating radio buttons */}
          <div className="mb-3">
            <label className="form-label">Rating</label><br />
            {[1, 2, 3, 4, 5].map((num) => (
              <div className="form-check form-check-inline" key={num}>
                <input
                  type="radio"
                  name="rating"
                  value={num}
                  checked={this.state.rating === String(num)}
                  onChange={this.handleChange}
                  className="form-check-input"
                />
                <label className="form-check-label">{num}</label>
              </div>
            ))}
          </div>

          {/* Description textarea */}
          <div className="mb-3">
            <label className="form-label">Description</label>
            <textarea
              name="description"
              value={this.state.description}
              onChange={this.handleChange}
              className="form-control"
              rows="3"
            />
          </div>

          {/* Streaming platforms checkboxes */}
          <div className="mb-3">
            <label className="form-label">Available on</label><br />
            {['Netflix', 'AmazonPrime', 'DisneyPlus', 'Others'].map((platform) => (
              <div className="form-check form-check-inline" key={platform}>
                <input
                  type="checkbox"
                  name={platform}
                  checked={this.state.platforms[platform]}
                  onChange={this.handleCheckboxChange}
                  className="form-check-input"
                />
                <label className="form-check-label">{platform}</label>
              </div>
            ))}
          </div>

          {/* Submit button */}
          <button type="submit" className="btn btn-primary w-100">
            Add Movie
          </button>
        </form>

        {/* Movie list table */}
        {this.state.movies.length > 0 && (
          <div className="mt-5">
            <h5>🎥 Movie List</h5>
            <table className="table table-bordered table-striped">
              <thead className="table-dark">
                <tr>
                  <th>Title</th>
                  <th>Director</th>
                  <th>Year</th>
                  <th>Genre</th>
                  <th>Rating</th>
                  <th>Description</th>
                  <th>Platforms</th>
                </tr>
              </thead>
              <tbody>
                {this.state.movies.map((movie, index) => (
                  <tr key={index}>
                    <td>{movie.title}</td>
                    <td>{movie.director}</td>
                    <td>{movie.year}</td>
                    <td>{movie.genre}</td>
                    <td>{movie.rating}</td>
                    <td>{movie.description}</td>
                    <td>{movie.platforms.join(', ')}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    );
  }
}

// Export the component so it can be used in App.js
export default MovieForm;