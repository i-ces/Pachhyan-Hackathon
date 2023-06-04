import React, { useState } from 'react';
import { CaretDown, CaretUp } from 'phosphor-react';

import './Accordion.css';

export default function Accordion({ title, description }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleAccordion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
   <div>
     <div className="accordion">
      <div className="accordion-header" onClick={toggleAccordion}>
        <div className="accordion-title">{title}</div>
        {isExpanded ? <CaretUp size={24} /> : <CaretDown size={24} />}
      </div>
    </div>
    {isExpanded && (
        <div className="accordion-content">
          <p>{description}</p>
        </div>
      )}
   </div>
  );
}
