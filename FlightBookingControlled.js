// Import React and Component class from the React library
import React, { Component } from 'react';

// Define a class-based component named FlightBookingControlled
class FlightBookingControlled extends Component {
  // Constructor initializes component state
  constructor(props) {
    super(props); // Call parent constructor
    this.state = {
      passengerName: '', // Stores passenger name input
      email: '',         // Stores email input
      gender: '',        // Stores selected gender
      meal: 'Veg',       // Default meal preference
      request: '',       // Stores special request text
      submitted: false   // Flag to conditionally show submitted data
    };
  }

  // Generic handler for all input changes
  handleChange = (e) => {
    const { name, value } = e.target; // Extract name and value from input
    this.setState({ [name]: value }); // Dynamically update corresponding state field
  };

  // Handles form submission
  handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    this.setState({ submitted: true }); // Set flag to show submitted data
  };

  // Render method returns JSX
  render() {
    return (
      // Bootstrap card container with padding and shadow
      <div className="card p-4 mb-5 shadow">
        {/* Form heading */}
        <h4 className="mb-4">Controlled Flight Booking Form</h4>

        {/* Form element with submit handler */}
        <form onSubmit={this.handleSubmit}>
          {/* Passenger Name input */}
          <div className="mb-3">
            <label className="form-label">Passenger Name</label>
            <input
              type="text"
              name="passengerName"
              value={this.state.passengerName} // Controlled input
              onChange={this.handleChange}     // Updates state on change
              className="form-control"         // Bootstrap styling
              required                         // HTML5 validation
            />
          </div>

          {/* Email input */}
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              className="form-control"
              required
            />
          </div>

          {/* Gender radio buttons */}
          <div className="mb-3">
            <label className="form-label">Gender</label><br />
            {/* Male option */}
            <div className="form-check form-check-inline">
              <input
                type="radio"
                name="gender"
                value="Male"
                checked={this.state.gender === 'Male'} // Checked if selected
                onChange={this.handleChange}
                className="form-check-input"
              />
              <label className="form-check-label">Male</label>
            </div>
            {/* Female option */}
            <div className="form-check form-check-inline">
              <input
                type="radio"
                name="gender"
                value="Female"
                checked={this.state.gender === 'Female'}
                onChange={this.handleChange}
                className="form-check-input"
              />
              <label className="form-check-label">Female</label>
            </div>
          </div>

          {/* Meal Preference dropdown */}
          <div className="mb-3">
            <label className="form-label">Meal Preference</label>
            <select
              name="meal"
              value={this.state.meal}
              onChange={this.handleChange}
              className="form-select"
            >
              <option value="Veg">Veg</option>
              <option value="Non-Veg">Non-Veg</option>
            </select>
          </div>

          {/* Special Request textarea */}
          <div className="mb-3">
            <label className="form-label">Special Request</label>
            <textarea
              name="request"
              value={this.state.request}
              onChange={this.handleChange}
              className="form-control"
              rows="3"
            />
          </div>

          {/* Submit button */}
          <button type="submit" className="btn btn-primary w-100">
            Submit
          </button>
        </form>

        {/* Conditionally render submitted data */}
        {this.state.submitted && (
          <div className="mt-4">
            <h5>Submitted Details</h5>
            {/* Bootstrap styled table */}
            <table className="table table-bordered table-striped">
              <thead className="table-dark">
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Gender</th>
                  <th>Meal</th>
                  <th>Request</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{this.state.passengerName}</td>
                  <td>{this.state.email}</td>
                  <td>{this.state.gender}</td>
                  <td>{this.state.meal}</td>
                  <td>{this.state.request}</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    );
  }
}

// Export the component so it can be imported in App.js
export default FlightBookingControlled;