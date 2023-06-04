import React, { useState } from 'react';
import { CaretDown, CaretUp } from 'phosphor-react';

export default function Accordion({ title, description }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleAccordion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="w-full">
      <div className="border border-gray-300 rounded laptop:w-[50rem] mobile:w-96">
        <div
          className={"flex w-full items-center justify-between bg-[#242961] text-white text-xl font-bold px-6 py-4 cursor-pointer"}
          onClick={toggleAccordion}
        >
          <div className=" mr-4">{title}</div>
          {isExpanded ? <CaretUp size={24} /> : <CaretDown size={24} />}
        </div>
      </div>
      {isExpanded && (
        <div className="border text-lg border-gray-300 p-4 laptop:w-[50rem] mobile:w-96">
          {description}
        </div>
      )}
    </div>
  );
}