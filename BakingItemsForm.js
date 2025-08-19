// Import React and useState hook for managing component state
import React, { useState } from 'react';

// Import Bootstrap CSS for styling
import 'bootstrap/dist/css/bootstrap.min.css';

// Define the functional component
function BakingFormTable() {
  // State to manage form input values as a single object
  const [formData, setFormData] = useState({
    itemName: '',        // Name of the baking item
    quantity: '',        // Quantity to bake
    ingredients: '',     // Ingredients used
    bakingTime: '',      // Time required to bake
    category: 'Cake'     // Default category selected
  });

  // State to store all submitted baking items in an array
  const [itemsList, setItemsList] = useState([]);

  // Function to handle input changes for all fields
  const handleChange = (e) => {
    const { name, value } = e.target; // Destructure name and value from input
    setFormData((prev) => ({
      ...prev,              // Spread previous form data
      [name]: value         // Update the changed field dynamically
    }));
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload on form submit

    // Add current form data to itemsList using spread operator
    setItemsList((prevList) => [...prevList, formData]);

    // Reset form fields to initial state
    setFormData({
      itemName: '',
      quantity: '',
      ingredients: '',
      bakingTime: '',
      category: 'Cake'
    });
  };

  // JSX returned by the component
  return (
    <div className="container mt-5"> {/* Bootstrap container with top margin */}
      <div className="card p-4 shadow"> {/* Bootstrap card with padding and shadow */}
        <h3 className="mb-4">🍰 Add Baking Item</h3> {/* Form title */}

        {/* Form element with submit handler */}
        <form onSubmit={handleSubmit}>
          {/* Input field: Item Name */}
          <div className="mb-3">
            <label className="form-label">Item Name</label>
            <input
              type="text"
              name="itemName"
              value={formData.itemName}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>

          {/* Input field: Quantity */}
          <div className="mb-3">
            <label className="form-label">Quantity</label>
            <input
              type="number"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>

          {/* Input field: Ingredients */}
          <div className="mb-3">
            <label className="form-label">Ingredients</label>
            <input
              type="text"
              name="ingredients"
              value={formData.ingredients}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>

          {/* Input field: Baking Time */}
          <div className="mb-3">
            <label className="form-label">Baking Time (mins)</label>
            <input
              type="number"
              name="bakingTime"
              value={formData.bakingTime}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>

          {/* Dropdown: Category */}
          <div className="mb-3">
            <label className="form-label">Category</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="form-select"
              required
            >
              <option value="Cake">Cake</option>
              <option value="Bread">Bread</option>
              <option value="Pastry">Pastry</option>
            </select>
          </div>

          {/* Submit button */}
          <button type="submit" className="btn btn-primary w-100">
            Add Item
          </button>
        </form>
      </div>

      {/* Conditionally render table only if items exist */}
      {itemsList.length > 0 && (
        <div className="card mt-5 p-4 shadow"> {/* Table container */}
          <h4 className="mb-3">📋 Baking Items List</h4>

          {/* Bootstrap styled table */}
          <table className="table table-bordered table-striped">
            <thead className="table-dark">
              <tr>
                <th>Item Name</th>
                <th>Quantity</th>
                <th>Ingredients</th>
                <th>Baking Time</th>
                <th>Category</th>
              </tr>
            </thead>
            <tbody>
              {/* Map through itemsList and render each item */}
              {itemsList.map((item, index) => (
                <tr key={index}>
                  <td>{item.itemName}</td>
                  <td>{item.quantity}</td>
                  <td>{item.ingredients}</td>
                  <td>{item.bakingTime}</td>
                  <td>{item.category}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

// Export the component for use in App.js
export default BakingFormTable;