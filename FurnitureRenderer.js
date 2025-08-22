import React from 'react';
import Chair from './Chair';
import Table from './Table';
import Sofa from './Sofa';
import Bed from './Bed';

const FurnitureRenderer = ({ type, data }) => {
  switch (type) {
    case 'Chair':
      return <Chair {...data} />;
    case 'Table':
      return <Table {...data} />;
    case 'Sofa':
      return <Sofa {...data} />;
    case 'Bed':
      return <Bed {...data} />;
    default:
      return <p>Unknown furniture type</p>;
  }
};

export default FurnitureRenderer;