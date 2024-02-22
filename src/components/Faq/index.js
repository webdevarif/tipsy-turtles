import React, { useEffect, useState } from 'react';
import FaqJson from '@/data/faq.json';
import Accordion from '@/components/Accordion';
import AccordionSkeletion from '@/components/AccordionSkeleton';
import RoadMapImage from '@/assets/images/road-map.webp';
import NftLicence from '@/assets/pdf/tipsy-turtles-nft-license-agreement.pdf';

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
            "answer": "<p>In case you missed it, it's 2500 total; 1000 for the first wave of the mint, 1000 for the second wave of the mint and 500 reserved for the team & treasury. </p>"
        },
        {
            "question": "Mint Price?",
            "answer": "<p>For the first wave, it's going to be the ADA equivalent of $59 USD for the whitelist phase; and for the public phase, it's going to be the ADA equivalent of $62 USD. </p>"
        },
        {
            "question": "Wen Mint?",
            "answer": "<p>White List Phase: February 25, 2024 at 4:00 p.m UTC!  Public Mint: February 25, 2024 at 6:00 p.m UTC!</p>"
        },
        {
            "question": "Whitelist & Mint Approach?",
            "answer": "<p>White lists were given out to the early, the active and the fortunate. It is likely too late to whitelist, but to be sure, confirm by reaching out on discord in the channel #ask-the-team. The mint will be done in phases - whitelisted members for the first two hours, with a restriction of 2 per wallet; and then the public phase directly afterwards, with no restrictions on the number a wallet can mint. Keen to note is that this CIP-68 mint will be done entirely on a \"first come, first serve\" basis, including the oversubscribed whitelist phase. Leave the drinks at the BAR, and be sure to mint promptly!</p><p>Lastly, if you won a \"free mint\", you will instead be airdropped an NFT at no cost to you, and allowed to mint in the whitelist phase at the standard discount. </p>"
        },
        {
            "question": "Road Map?",
            "answer": "<p>Not exactly. In true NFT fashion, you've been given a cool looking, cryptic graphic 😉. But post mint, you can look forward to more animations, a token & TripHut!</p> <img src='" + RoadMapImage.src + "' />"
        },
        {
            "question": "Utility?",
            "answer": "<p>Yes! The collection is powered by TripHut, which means that by simply holding a Tipsy Turtle, you can get access to free or discounted vacations. More will be revealed in time!</p>"
        },
        {
            "question": "IP?",
            "answer": "<p>Once you hold the CNFT, you are free to use the Tipsy Turtles IP for personal & even commercial purposes. More on that here: <a href='#'>NFT License Agreement</a></p>"
        },
        {
            "question": "Royalties?",
            "answer": "<p>For the duration of the first wave of the mint, Tipsy Turtles will be implementing a \"Paper Hand Royalty\" of 80%, which is immediately reduced to 8% after selling out. </p>"
        },
        {
            "question": "Policy ID?",
            "answer": "<p>Coming soon TM.</p>"
        },
        {
            "question": "Learn More?",
            "answer": "<p>We'll be updating the Tipsy Turtles website periodically. Until then, Twitter & Discord are your friends, anon. Oh! And you can watch the first season of the animated series on those platforms as well! </p>"
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