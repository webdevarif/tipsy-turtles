import React, { useEffect, useState } from 'react';
import FaqJson from '@/data/faq.json';
import Accordion from '@/components/Accordion';
import AccordionSkeletion from '@/components/AccordionSkeleton';
import RoadMapImage from '@/assets/images/road-map.webp';

const Faq = () => {
    const [expanded, setExpanded] = useState(0);
    const [faqs, setFaqs] = useState([]);

    const data = [
        {
            "question": "Mission & Vision?",
            "answer": "<p><strong>Mission:</strong> To experiment with Web 3 Tools, Story Telling and In-Real-Life experiences to bring value to our community, to the greatest extent of our creative abilities. </p><p><strong>Vision:</strong> To become meaningful intellectual property.</p>"
        },
        {
            "question": "Why Cardano?",
            "answer": "<p>We were sober when we decided that a provably sustainable and decentralised blockchain would be the way of the future. </p>"
        },
        {
            "question": "Supply?",
            "answer": "<p>In case you missed it, it’s 6200; 6000 for the “public” mint and 200 reserved for the team. </p>"
        },
        {
            "question": "Mint Price?",
            "answer": "<p>Its likeliest to be the ADA equivalent of $37 USD. We’ll sober up and confirm key details before mint day. Grab a drink in the meanwhile?</p>"
        },
        {
            "question": "Wen Mint?",
            "answer": "<p>Q1, 2024. Stick close to <a href='#'>Twitter</a> &amp; <a href='https://discord.gg/wgstwPmz'>Discord</a> for confirmation.</p>"
        },
        {
            "question": "Whitelist & Mint Approach?",
            "answer": "<p>Yes! The Private sale will be an all-whitelist mint and the Public sale will be directly afterwards (no white list required). If you’re reading this, its likely too late to whitelist but be sure to confirm by reaching out on discord in the channel #ask-the-team. The early, the active and the fortunate were rewarded whitelists over the last few months.</p>"
        },
        {
            "question": "Road Map?",
            "answer": "<p>Not exactly. In true NFT fashion, you’ve been given a cool looking, cryptic graphic.</p> <img src='" + RoadMapImage.src + "' />"
        },
        {
            "question": "Utility?",
            "answer": "<p>Yes! Tipsy Turtles is powered by TripHut, whatever that means. Lol. More will be revealed in time. Just don’t miss this Cardano NFT drop. </p>"
        },
        {
            "question": "IP?",
            "answer": "<p>Once you hold the CNFT, you are free to use the Tipsy Turtles IP for personal & even commercial purposes. More on that here: <a href='#' target='_blank' class='font-semibold underline'>Terms & conditions.</a></p>"
        },
        {
            "question": "Policy ID?",
            "answer": "<p>Coming soon TM.</p>"
        },
        {
            "question": "Learn More?",
            "answer": "<p>We’ll be updating the Tipsy Turtles website periodically. Until then, <a href='https://twitter.com/tipsy__turtles' target='_blank' class='font-semibold underline'>Twitter</a> & <a href='https://discord.gg/wgstwPmz' target='_blank' class='font-semibold underline'>Discord</a> are your friends, anon! </p>"
        }
    ]
   
    useEffect(() => {
        setFaqs((data)); // Using the callback to update based on the previous state
    }, []); // Adding an empty dependency array to run the effect only once on mount
    
  return (
    <section className='faq py-[100px]' id="section-faqs">
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