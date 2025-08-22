import React from 'react';

const JsonDisplay = ({ data }) => {
  return (
    <div style={{ marginTop: '30px' }}>
      <h3>📦 Submitted Data (JSON)</h3>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default JsonDisplay;