import React from 'react';
import './Card.css';
import { FacebookLogo, PhoneCall } from 'phosphor-react';

export default function Card({ avatar, name, position,social,phone}) {
  return (
    <div className="card">
      <div className="card-header">
        <img src={avatar} alt="Avatar" className="card-avatar" />
        <p className="card-position">{position}</p>
        <h2 className="card-name">{name}</h2>
      </div>
     <div className='flex items-center justify-center gap-3'>
     <a href={social} target='blank'>
      <div className="button-elevated">
        <FacebookLogo size={54}/>
      </div>
      </a>
      <a href={`tel:${phone}`}>
      <div className="button-elevated">
        <PhoneCall size={48}/>
      </div>
      </a>
     </div>
    </div>
  );
}
