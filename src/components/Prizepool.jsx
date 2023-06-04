import React from 'react';
import Price from './subcomponents/Price';
import './Prizepool.css';
import Title from './subcomponents/Title';

export default function Prizepool() {
  return (
     <div className='prizepool'>
      <Title text="Prize Pool"/>
    <div className="prizepool-container">
    <div className="prize-container">
        <img src="/images/Award.png" alt="cup1" className="prize-image-1" />
        <div className="price-tag">
          <Price amount={25000} color={"#ffc107"}/>
        </div>
      </div>
      <div className="prize-container">
        <img src="/images/Second.png" alt="cup2" className="prize-image-2" />
        <div className="price-tag">
         <Price amount={10000} color={"silver"}/>
        </div>
      </div>
    </div>
     </div>
  );
}
