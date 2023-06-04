import React from 'react';
import './main.css';

export default function MainContent() {
  return (
    <div className="main-content-container">
      <div className="main-content">
        <div className="partners-row">
          <div className="partner">
            <img src="/images/data.png" alt="something1" height={100} width={100} />
          </div>
          <div className="logo">Logo part</div>
          <div className="partner">
            <img src="/images/data.png" alt="something1" height={100} width={100} />
          </div>
        </div>
        <div className="title">Pachyaan Hackathon</div>
        <div className="description">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quibusdam inventore dolore provident.
            Iste cupiditate doloribus labore! Nisi excepturi, veritatis facilis rem voluptates tempore aliquid quo ipsum
            quis fuga cumque.
          </p>
        </div>
      </div>
    </div>
  );
}
