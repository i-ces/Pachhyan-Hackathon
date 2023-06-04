import React from 'react';
import Title from './subcomponents/Title';
import './rules.css';

export default function Rules() {
  return (
    <div className="rules-container">
      <div className="rules-section">
        <Title text="title1" className="rules-title" />
        <div className="rules-content">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non adipisci tempora sapiente nisi mollitia fugit
            omnis in dolorem ipsum assumenda! Officiis porro necessitatibus rerum, quidem voluptatum quia! Odit, odio fugit?
          </p>
        </div>
      </div>
      <div className="rules-section">
        <Title text="title2" className="rules-title" />
        <div className="rules-content">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non adipisci tempora sapiente nisi mollitia fugit
            omnis in dolorem ipsum assumenda! Officiis porro necessitatibus rerum, quidem voluptatum quia! Odit, odio fugit?
          </p>
        </div>
      </div>
      <div className="rules-section">
        <Title text="title3" className="rules-title" />
        <div className="rules-content">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non adipisci tempora sapiente nisi mollitia fugit
            omnis in dolorem ipsum assumenda! Officiis porro necessitatibus rerum, quidem voluptatum quia! Odit, odio fugit?
          </p>
        </div>
      </div>
    </div>
  );
}
