// Import React and Component class to create a class-based component
import React, { Component } from 'react';
// Import the TelevisionList component to display the models
import TelevisionList from './TelevisionList';

// Define a class component to manage state and user input
class TelevisionManager extends Component {
  constructor(props) {
    super(props); // Call the parent constructor
    // Initialize state with a default list and an empty input field
    this.state = {
      models: ['Samsung QLED', 'LG OLED', 'Sony Bravia'], // Initial TV models
      newModel: '' // Controlled input field value
    };
  }

  // Update the input field value in state as the user types
  handleChange = (event) => {
    this.setState({ newModel: event.target.value }); // Sync input with state
  };

  // Add the new model to the list using the spread operator
  handleAddModel = () => {
    const { newModel, models } = this.state;

    // Only add if the input is not empty
    if (newModel.trim() !== '') {
      this.setState({
        models: [...models, newModel.trim()], // Spread operator creates a new array
        newModel: '' // Clear the input field after adding
      });
    }
  };

  // Render the UI
  render() {
    return (
      <div style={{ padding: '20px' }}>
        <h1>Television Manager</h1> {/* Main heading */}

        {/* Input field for entering a new model */}
        <input
          type="text"
          value={this.state.newModel} // Controlled input value
          onChange={this.handleChange} // Update state on change
          placeholder="Enter TV model" // Placeholder text
        />

        {/* Button to trigger adding the model */}
        <button onClick={this.handleAddModel} style={{ marginLeft: '10px' }}>
          Add
        </button>

        {/* Render the TelevisionList component and pass models as props */}
        <TelevisionList models={this.state.models} />
      </div>
    );
  }
}

// Export the component so it can be used in App.js
export default TelevisionManager;