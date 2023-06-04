import React from 'react';
import Accordion from './subcomponents/Accordion';
import faqsData from '../store/faq.json'
import Title from './subcomponents/Title';
import './faqs.css'

export default function FAQs() {

  return (
    <div className='faq'>
      <Title text="FAQs"/>
    <div className='faq-list'>
    {faqsData.map((faq) => (
        <Accordion
          key={faq.id}
          title={faq.question}
          description={faq.answer}
        />
      ))}
    </div>
    </div>
  );
}
