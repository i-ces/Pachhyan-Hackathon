import React from 'react';
import './Card.css';

export default function Card({ avatar, name, position, description }) {
  return (
    <div className="card">
      <div className="card-header">
        <img src={avatar} alt="Avatar" className="card-avatar" />
        <p className="card-position">{position}</p>
        <h2 className="card-name">{name}</h2>
      </div>
      <div className="card-content">
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
}
