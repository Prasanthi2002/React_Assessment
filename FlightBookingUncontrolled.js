// Import React and Component class, plus createRef for uncontrolled inputs
import React, { Component, createRef } from 'react';

// Define a class-based component for the Uncontrolled Flight Booking Form
class FlightBookingUncontrolled extends Component {
  constructor(props) {
    super(props); // Call the parent constructor

    // Create refs for each form field to access DOM values directly
    this.flightRef = createRef();     // Ref for Flight Number input
    this.sourceRef = createRef();     // Ref for Source input
    this.destRef = createRef();       // Ref for Destination input
    this.dateRef = createRef();       // Ref for Travel Date input
    this.termsRef = createRef();      // Ref for Terms Accepted checkbox

    // Initialize state to track submission and store flight data
    this.state = {
      submitted: false,               // Flag to conditionally show submitted data
      flightData: {}                  // Object to hold submitted flight details
    };
  }

  // Handle form submission
  handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload on form submit

    // Read values directly from refs and store in flightData object
    const flightData = {
      flightNumber: this.flightRef.current.value,
      source: this.sourceRef.current.value,
      destination: this.destRef.current.value,
      travelDate: this.dateRef.current.value,
      termsAccepted: this.termsRef.current.checked // Boolean for checkbox
    };

    // Update state to show submitted data
    this.setState({ submitted: true, flightData });
  };

  // Render method returns JSX
  render() {
    return (
      // Bootstrap card container with padding and shadow
      <div className="card p-4 shadow">
        {/* Form heading */}
        <h4 className="mb-4">Uncontrolled Flight Booking Form</h4>

        {/* Form element with submit handler */}
        <form onSubmit={this.handleSubmit}>
          {/* Flight Number input field */}
          <div className="mb-3">
            <label className="form-label">Flight Number</label>
            <input
              type="text"
              ref={this.flightRef}            // Connect input to ref
              className="form-control"        // Bootstrap styling
              required                        // HTML5 validation
            />
          </div>

          {/* Source input field */}
          <div className="mb-3">
            <label className="form-label">Source</label>
            <input
              type="text"
              ref={this.sourceRef}
              className="form-control"
              required
            />
          </div>

          {/* Destination input field */}
          <div className="mb-3">
            <label className="form-label">Destination</label>
            <input
              type="text"
              ref={this.destRef}
              className="form-control"
              required
            />
          </div>

          {/* Travel Date input field */}
          <div className="mb-3">
            <label className="form-label">Travel Date</label>
            <input
              type="date"
              ref={this.dateRef}
              className="form-control"
              required
            />
          </div>

          {/* Terms Accepted checkbox */}
          <div className="form-check mb-3">
            <input
              type="checkbox"
              ref={this.termsRef}
              className="form-check-input"
            />
            <label className="form-check-label">I accept the terms</label>
          </div>

          {/* Submit button */}
          <button type="submit" className="btn btn-success w-100">
            Submit
          </button>
        </form>

        {/* Conditionally render submitted flight details */}
        {this.state.submitted && (
          <div className="card mt-4 p-3 bg-light">
            <h5>Flight Details</h5>
            <p><strong>Flight Number:</strong> {this.state.flightData.flightNumber}</p>
            <p><strong>Source:</strong> {this.state.flightData.source}</p>
            <p><strong>Destination:</strong> {this.state.flightData.destination}</p>
            <p><strong>Travel Date:</strong> {this.state.flightData.travelDate}</p>
            <p><strong>Terms Accepted:</strong> {this.state.flightData.termsAccepted ? 'Yes' : 'No'}</p>
          </div>
        )}
      </div>
    );
  }
}

// Export the component so it can be imported in App.js
export default FlightBookingUncontrolled;