// src/components/MarriageForm.js

// Import React and Component class to create a class-based component
import React, { Component } from 'react';

// Define the MarriageForm class component
class MarriageForm extends Component {
  constructor(props) {
    super(props); // Call parent constructor
    // Initialize state with empty fields for the form
    this.state = {
      brideName: '',
      groomName: '',
      date: '',
      venue: '',
      submitted: false // Flag to track if form was submitted
    };
  }

  // Handle input changes and update corresponding state field
  handleChange = (event) => {
    const { name, value } = event.target; // Destructure name and value from input
    this.setState({ [name]: value }); // Dynamically update state field
  };

  // Handle form submission
  handleSubmit = (event) => {
    event.preventDefault(); // Prevent page reload
    this.setState({ submitted: true }); // Set submitted flag to true
  };

  // Render the form and submitted details
  render() {
    const { brideName, groomName, date, venue, submitted } = this.state;

    return (
      <div className="container mt-5">
        {/* Bootstrap container with top margin */}
        <div className="card p-4">
          {/* Bootstrap card with padding */}
          <h2 className="mb-4">Marriage Registration Form</h2>

          {/* Form element with submit handler */}
          <form onSubmit={this.handleSubmit}>
            {/* Bride Name field */}
            <div className="form-group mb-3">
              <label>Bride Name</label>
              <input
                type="text"
                className="form-control"
                name="brideName"
                value={brideName}
                onChange={this.handleChange}
                placeholder="Enter bride's name"
              />
            </div>

            {/* Groom Name field */}
            <div className="form-group mb-3">
              <label>Groom Name</label>
              <input
                type="text"
                className="form-control"
                name="groomName"
                value={groomName}
                onChange={this.handleChange}
                placeholder="Enter groom's name"
              />
            </div>

            {/* Date field */}
            <div className="form-group mb-3">
              <label>Marriage Date</label>
              <input
                type="date"
                className="form-control"
                name="date"
                value={date}
                onChange={this.handleChange}
              />
            </div>

            {/* Venue field */}
            <div className="form-group mb-4">
              <label>Venue</label>
              <input
                type="text"
                className="form-control"
                name="venue"
                value={venue}
                onChange={this.handleChange}
                placeholder="Enter venue"
              />
            </div>

            {/* Submit button */}
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>

        {/* Display submitted details below the form */}
        {submitted && (
          <div className="card mt-4 p-4">
            <h3>Marriage Details</h3>
            <p><strong>Bride Name:</strong> {brideName}</p>
            <p><strong>Groom Name:</strong> {groomName}</p>
            <p><strong>Date:</strong> {date}</p>
            <p><strong>Venue:</strong> {venue}</p>
          </div>
        )}
      </div>
    );
  }
}

// Export the component so it can be used in App.js
export default MarriageForm;