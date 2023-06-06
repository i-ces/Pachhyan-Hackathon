import React from 'react';
import Title from './subcomponents/Title';

const sponsorsData = [
  { id: 1, logo: 'logo.png' },
  // Add more sponsors as needed
];

export default function Sponsors() {
  return (
  <div className='flex flex-col gap-10 items-center justify-center'>
    <Title text="Our Sponsors"/>

      <div className="flex flex-wrap gap-4 items-center justify-center m-t-96">
      {sponsorsData.map((sponsor) => (
        <div key={sponsor.id} className="flex items-center justify-center border-rounded">
          <img src={`/images/${sponsor.logo}`} alt={`Sponsor ${sponsor.id}`} className="w-96 h-auto object-contain" />
        </div>
      ))}
    </div>
  </div>
  );
}
