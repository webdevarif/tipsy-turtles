"use client";

import React, { useEffect, useState } from 'react';
import Accordion from '@/components/Faq/Accordion';
import FaqJson from '@/data/faq.json';
import AccordionSkeletion from '@/components/Faq/AccordionSkeleton';

const Faq = () => {
    const [expanded, setExpanded] = useState(0);
    const [faqs, setFaqs] = useState([]);
   
    useEffect(() => {
        setFaqs((FaqJson)); // Using the callback to update based on the previous state
    }, []); // Adding an empty dependency array to run the effect only once on mount
    
  return (
    <section className='faq py-[100px]'>
        <div className="container">
            {/* Header */}
            <div className="flex items-center justify-center 2xl:justify-between mb-[50px]">
                <h2 className='font-bold text-[40px] xl:text-[50px] 2xl:text-[120px] leading-[1] text-primary-darker'>FAQs</h2>
            </div>
            
            {faqs.length > 0 ? (
                    <div className="xl:columns-2 break-inside-avoid xl:gap-x-[30px] 2xl:gap-x-[80px]">
                        {faqs.map((item, i) => (
                            <Accordion key={i} i={i} item={item} expanded={expanded} setExpanded={setExpanded} />
                        ))}
                    </div>
                ) : (
                    <div className="xl:columns-2 break-inside-avoid xl:gap-x-[30px] 2xl:gap-x-[80px]">
                        {Array.from({ length: 8 }, (_, i) => (
                            <AccordionSkeletion key={i} /> // Replace with your actual skeleton component
                        ))}
                    </div>
                )}

        </div>
    </section>
  )
}

export default Faq;