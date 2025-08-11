"use client"
import { useState } from 'react';
import PlusIcon from '../assets/icons/plus.svg';
import MinusIcon from '../assets/icons/minus.svg';
import clsx from 'clsx';
const items = [
  {
    question: "Is the app free to use?",
    answer:
      "We offer a free trial so you can test all features. A one-time license is available for unlimited use.",
  },
  {
    question: "Can I import my existing grades?",
    answer:
      "Yes. You can import from Excel or CSV files in just a few clicks.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Absolutely. Your data is stored locally and never shared without your permission.",
  },
  {
    question: "Does it support different grading systems?",
    answer:
      "Yes. You can customize grading scales and criteria to match your institution’s requirements.",
  },
];
const AccordionItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div key={question} className='py-7 border-b border-white/30' onClick={()=>setIsOpen(!isOpen)}>
      <div className='flex items-center'>
        <span className='flex-1 text-lg font-bold'>
          {question}
        </span>
        {isOpen ? <MinusIcon/> : <PlusIcon />}
        
      </div>
      <div className={clsx("mt-4",{
        'hidden': !isOpen,
        '': isOpen === true
      })}>{answer}</div>
    </div>
  )
}
export const FAQs = () => {
  return (
    <div className="bg-black text-white bg-gradient-to-b from-primary to-black py-[72px] sm:py-24">
      <div className="container">
        <h2 className='text-center text-5xl sm:text-6xl sm:max-w-[648px] mx-auto font-bold tracking-tighter'>Frequently Asked Questions</h2>
        <div className='mt-12 max-w-[648px] mx-auto'>
          {items.map(({ question, answer }) => (
            <AccordionItem key={question} question={question} answer={answer}/>
          ))}
        </div>
      </div>
    </div>
  );
};
