import React from 'react';
import Price from './subcomponents/Price';
import Title from './subcomponents/Title';
import './Prizepool.css';

export default function Prizepool() {
  return (
     <div className='prizepool'>
      <Title text="Prize Pool"/>
    <div className="prizepool-container">
    <div className="prize-container">
        <img src="/images/Award.png" alt="cup1" className="prize-image-1" />
        <div className='prize-subtitle'>Grand Prize</div>
        <div className="price-tag">
          <Price amount={15000} color={"#ffc107"} fontSize={32}/>
        </div>
      </div>
      <div className="prize-container">
        <img src="/images/Second.png" alt="cup2" className="prize-image-2" />
        <div className='prize-subtitle'>Runner Up</div>
        <div className="price-tag">
         <Price amount={10000} color={"silver"} fontSize={24}/>
        </div>
      </div>
    </div>
     </div>
  );
}
