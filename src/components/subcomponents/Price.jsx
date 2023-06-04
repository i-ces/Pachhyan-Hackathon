import React from 'react';
import './price.css';

export default function Price({ amount, color }) {
  const containerStyle = {
    borderColor: color,
  };

  const textStyle = {
    color: color,
  };

  return (
    <div className="price-container" style={containerStyle}>
      <div className="price-icon" style={textStyle}>Rs</div>
      <div className="price-amount" style={textStyle}>{amount}</div>
    </div>
  );
}
