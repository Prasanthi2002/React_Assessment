// Import React to use JSX and functional components
import React from 'react';

// Define a functional component that receives 'models' as props
function TelevisionList({ models }) {
  return (
    <div>
      <h2>Television Models</h2> {/* Heading for the list */}
      <ul>
        {/* Loop through the models array and render each item */}
        {models.map((model, index) => (
          <li key={index}>{model}</li> // 'key' helps React track list items efficiently
        ))}
      </ul>
    </div>
  );
}

// Export the component so it can be used in other files
export default TelevisionList;