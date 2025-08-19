// Import React and Component to create a class-based component
import React, { Component } from 'react';

// Define the AccessoriesForm class component
class AccessoriesForm extends Component {
  constructor(props) {
    super(props); // Call the parent constructor to inherit props

    // Initialize state with all form fields and a submission flag
    this.state = {
      accessoryName: '',   // Text input for accessory name
      description: '',     // Textarea for description
      category: '',        // Select dropdown for category
      brand: '',           // Radio buttons for brand
      inStock: false,      // Checkbox for availability
      warranty: '',        // Number input for warranty
      submitted: false     // Flag to show submitted data
    };
  }

  // Generic handler for all input changes
  handleChange = (event) => {
    const { name, value, type, checked } = event.target; // Extract input attributes

    // For checkbox, use 'checked' instead of 'value'
    const newValue = type === 'checkbox' ? checked : value;

    // Update the corresponding field in state
    this.setState({ [name]: newValue });
  };

  // Handle form submission
  handleSubmit = (event) => {
    event.preventDefault(); // Prevent page reload
    this.setState({ submitted: true }); // Set flag to display submitted data
  };

  // Render the form and submitted data
  render() {
    // Destructure state for easy access
    const {
      accessoryName,
      description,
      category,
      brand,
      inStock,
      warranty,
      submitted
    } = this.state;

    return (
      <div className="container mt-5">
        {/* Bootstrap container with top margin */}
        <div className="card p-4">
          {/* Bootstrap card with padding */}
          <h2 className="mb-4">Accessories Form</h2>

          {/* Form element with submit handler */}
          <form onSubmit={this.handleSubmit}>
            {/* Text input for accessory name */}
            <div className="form-group mb-3">
              <label>Accessory Name</label>
              <input
                type="text"
                className="form-control"
                name="accessoryName"
                value={accessoryName}
                onChange={this.handleChange}
                placeholder="Enter accessory name"
              />
            </div>

            {/* Textarea for description */}
            <div className="form-group mb-3">
              <label>Description</label>
              <textarea
                className="form-control"
                name="description"
                value={description}
                onChange={this.handleChange}
                rows="3"
                placeholder="Enter description"
              />
            </div>

            {/* Select dropdown for category */}
            <div className="form-group mb-3">
              <label>Category</label>
              <select
                className="form-control"
                name="category"
                value={category}
                onChange={this.handleChange}
              >
                <option value="">Select category</option>
                <option value="Electronics">Electronics</option>
                <option value="Fashion">Fashion</option>
                <option value="Home">Home</option>
              </select>
            </div>

            {/* Radio buttons for brand selection */}
            <div className="form-group mb-3">
              <label>Brand</label><br />
              {/* Each radio button shares the same name but different values */}
              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  className="form-check-input"
                  name="brand"
                  value="Sony"
                  checked={brand === 'Sony'}
                  onChange={this.handleChange}
                />
                <label className="form-check-label">Sony</label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  className="form-check-input"
                  name="brand"
                  value="Samsung"
                  checked={brand === 'Samsung'}
                  onChange={this.handleChange}
                />
                <label className="form-check-label">Samsung</label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  className="form-check-input"
                  name="brand"
                  value="LG"
                  checked={brand === 'LG'}
                  onChange={this.handleChange}
                />
                <label className="form-check-label">LG</label>
              </div>
            </div>

            {/* Checkbox for stock availability */}
            <div className="form-group mb-3">
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  name="inStock"
                  checked={inStock}
                  onChange={this.handleChange}
                />
                <label className="form-check-label">Available in stock</label>
              </div>
            </div>

            {/* Number input for warranty */}
            <div className="form-group mb-4">
              <label>Warranty (in years)</label>
              <input
                type="number"
                className="form-control"
                name="warranty"
                value={warranty}
                onChange={this.handleChange}
                placeholder="Enter warranty period"
              />
            </div>

            {/* Submit button */}
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>

        {/* Display submitted data in a Bootstrap table */}
        {submitted && (
          <div className="card mt-4 p-4">
            <h3>Submitted Accessory Details</h3>
            <table className="table table-bordered">
              <tbody>
                <tr>
                  <th>Accessory Name</th>
                  <td>{accessoryName}</td>
                </tr>
                <tr>
                  <th>Description</th>
                  <td>{description}</td>
                </tr>
                <tr>
                  <th>Category</th>
                  <td>{category}</td>
                </tr>
                <tr>
                  <th>Brand</th>
                  <td>{brand}</td>
                </tr>
                <tr>
                  <th>Available in Stock</th>
                  <td>{inStock ? 'Yes' : 'No'}</td>
                </tr>
                <tr>
                  <th>Warranty</th>
                  <td>{warranty} year(s)</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    );
  }
}

// Export the component so it can be used in App.js
export default AccessoriesForm;