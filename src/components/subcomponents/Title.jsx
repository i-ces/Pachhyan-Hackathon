import React from 'react';
import './title.css';

export default function Title({ text }) {
  return <div className='title flex-row '>
    {text}
    <hr className="w-2/3 border-t-2 rounded-full border-2 mx-auto border-[#6AE58E]" />
    </div>;
}
