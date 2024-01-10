"use client";

import React, { useState } from 'react';

const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const data = {
        list : [
            {
                question: 'Mission & Vision?',
                answer: '<p><strong>Mission:</strong> To experiment with Web 3 Tools, Story Telling and In-Real-Life experiences to bring value to our community, to the greatest extent of our creative abilities.</p><p><strong>Vision:</strong> To become meaningful intellectual property.</p>'
            },
            {
                question: 'Why Cardano?',
                answer: '<p><strong>Mission:</strong> To experiment with Web 3 Tools, Story Telling and In-Real-Life experiences to bring value to our community, to the greatest extent of our creative abilities.</p><p><strong>Vision:</strong> To become meaningful intellectual property.</p>'
            },
            {
                question: 'Supply?',
                answer: '<p><strong>Mission:</strong> To experiment with Web 3 Tools, Story Telling and In-Real-Life experiences to bring value to our community, to the greatest extent of our creative abilities.</p><p><strong>Vision:</strong> To become meaningful intellectual property.</p>'
            },
            {
                question: 'Mint Price?',
                answer: '<p><strong>Mission:</strong> To experiment with Web 3 Tools, Story Telling and In-Real-Life experiences to bring value to our community, to the greatest extent of our creative abilities.</p><p><strong>Vision:</strong> To become meaningful intellectual property.</p>'
            },
            {
                question: 'Wen Mint?',
                answer: '<p><strong>Mission:</strong> To experiment with Web 3 Tools, Story Telling and In-Real-Life experiences to bring value to our community, to the greatest extent of our creative abilities.</p><p><strong>Vision:</strong> To become meaningful intellectual property.</p>'
            },
            {
                question: 'Whitelist?',
                answer: '<p><strong>Mission:</strong> To experiment with Web 3 Tools, Story Telling and In-Real-Life experiences to bring value to our community, to the greatest extent of our creative abilities.</p><p><strong>Vision:</strong> To become meaningful intellectual property.</p>'
            },
            {
                question: 'Road Map?',
                answer: '<p><strong>Mission:</strong> To experiment with Web 3 Tools, Story Telling and In-Real-Life experiences to bring value to our community, to the greatest extent of our creative abilities.</p><p><strong>Vision:</strong> To become meaningful intellectual property.</p>'
            },
            {
                question: 'Utility?',
                answer: '<p><strong>Mission:</strong> To experiment with Web 3 Tools, Story Telling and In-Real-Life experiences to bring value to our community, to the greatest extent of our creative abilities.</p><p><strong>Vision:</strong> To become meaningful intellectual property.</p>'
            },
            {
                question: 'IP?',
                answer: '<p><strong>Mission:</strong> To experiment with Web 3 Tools, Story Telling and In-Real-Life experiences to bring value to our community, to the greatest extent of our creative abilities.</p><p><strong>Vision:</strong> To become meaningful intellectual property.</p>'
            },
            {
                question: 'Policy ID?',
                answer: '<p><strong>Mission:</strong> To experiment with Web 3 Tools, Story Telling and In-Real-Life experiences to bring value to our community, to the greatest extent of our creative abilities.</p><p><strong>Vision:</strong> To become meaningful intellectual property.</p>'
            },
            {
                question: 'Learn More?',
                answer: '<p><strong>Mission:</strong> To experiment with Web 3 Tools, Story Telling and In-Real-Life experiences to bring value to our community, to the greatest extent of our creative abilities.</p><p><strong>Vision:</strong> To become meaningful intellectual property.</p>'
            },
        ]
    }

    const handleAccordionClick = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
    
  return (
    <section className='faq py-[100px]'>
        <div className="container">
            {/* Header */}
            <div className="flex items-center justify-center 2xl:justify-between mb-[50px]">
                <h2 className='font-bold text-[40px] xl:text-[50px] 2xl:text-[120px] leading-[1] text-primary-darker'>FAQs</h2>
            </div>

            {data.list && <div className="xl:columns-2 break-inside-avoid xl:gap-x-[30px] 2xl:gap-x-[80px]">
                {data.list.map((item, i) =>(
                    <div 
                        key={i} 
                        onClick={() => handleAccordionClick(i)}
                        className={`item break-inside-avoid rounded-[10px] mb-[30px] p-[30px] block border border-[#646464] cursor-pointer ${activeIndex === i ? 'bg-primary-darker text-white' : ''}`}>
                        <div className="flex justify-between items-center">
                            <div>
                                <h6 className={`text-[20px] font-normal mb-2 ${activeIndex === i ? ' text-white' : 'text-grey'} `}>Question #{i+1}</h6>
                                <h3 className={`text-[30px] font-bold mb-4 ${activeIndex === i ? ' text-white' : 'text-dark'} `}>{item.question}</h3>
                            </div>
                            <div>
                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"> <circle cx="20" cy="20" r="18.75" fill="white" stroke="#8F8F8F" strokeWidth="2.5"/> <g clipPath="url(#clip0_166_233)"> <path d="M26.6344 18.6461H21.5375V13.3648C21.5375 12.6086 20.925 11.9961 20.1687 11.9961C19.4125 11.9961 18.8 12.6086 18.8 13.3648V18.6461H13.3625C12.6125 18.6461 12 19.2586 12 20.0149C12 20.7711 12.6125 21.3836 13.3687 21.3836H18.8063V26.6336C18.8063 27.3899 19.4188 28.0024 20.175 28.0024C20.9313 28.0024 21.5437 27.3899 21.5437 26.6336V21.3836H26.6406C27.3969 21.3836 28.0094 20.7711 28.0094 20.0149C28 19.2586 27.3906 18.6461 26.6344 18.6461Z" fill="#2F321D"/> </g> <defs> <clipPath id="clip0_166_233"> <rect width="16" height="16" fill="white" transform="translate(12 12)"/> </clipPath> </defs> </svg>
                            </div>
                        </div>
                        <div className={`accordion-body ${activeIndex === i ? 'is-open' : ''}`}>
                            <div className="text-[16px] md:text-[22px] text-desciption pe-4">
                                <div dangerouslySetInnerHTML={{__html:  item.answer }}></div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>}
        </div>
    </section>
  )
}

export default Faq