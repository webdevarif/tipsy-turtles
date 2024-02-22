import React from 'react';
import Turtles from '@/assets/images/turtles-bottles.png';
import TurtleStand from '@/assets/images/turtle-stand-details.webp';
import Image from 'next/image';
import { motion } from "framer-motion";


const Hero = () => {
  return (
    <section className='bg-[#F9FFF6] pt-[7rem] xl:pt-[15rem] min-h-screen flex flex-col gap-y-4 px-3 overflow-hidden relative'  id="section-the-story">
        <div className="container max-w-[1000px]">
          {/* Content Card */}
          <div className="bg-primary-darker text-white text-center p-[30px] pt-[40px] relative rounded-[15px] overflow-hidden mb-5">
            <motion.div 
              initial={{ opacity: 0, y: -100, x: 100 }}
              animate={{ opacity: 1, y:  0, x: 0 }}
              transition={{
                  duration: 0.8,
                  delay: 0.25,
                  ease: [0, 0.71, 0.2, 1.01]
              }}
              className='hidden md:inline-block max-w-[200px] absolute -top-10 -end-10'>
              <Image src={Turtles} alt="turtle bottle" />
            </motion.div>
              <h2 className='text-primary text-[40px] xl:text-[50px] 2xl:text-[70px] leading-[1] font-black mb-5'>The Story</h2>
              <div className="text-[16px] xl:text-[18px] 2xl:text-[24px] font-medium leading-[28px] xl:leading-[30px] 2xl:leading-[34px] mb-4">
              6200 CNF(T)urtles just washed up to shore; and they’re tipsy as FUD! We’re not sure how it happened, or why it happened, but it seems all they want to do is drink, make friends and have a good time on vacation?<br /> Maybe you can too.</div>
              {/* <div className="text-[16px] xl:text-[18px] 2xl:text-[24px] font-medium leading-[28px] xl:leading-[30px] 2xl:leading-[34px] mb-4">This could just be rum talk, but apparently, the Tipsy Turtles can afford to vacation because they bought Cardano NFTs. And no… not because something “mooned” but due to their bags being actually useful. Something about… a Travel DAO?</div> */}
              {/* <div className="text-[16px] xl:text-[18px] 2xl:text-[24px] font-medium leading-[28px] xl:leading-[30px] 2xl:leading-[34px]">Update… the Tipsy Turtles were able to vacation for free or at a discount because they bought Cardano NFTs powered by TripHut. And guess what? On February 25, 2024, you can too .</div> */}
          </div>
          <div className="text-center">
            <p>
                A few CNF(T)urtles just washed up to shore; and they’re tipsy as FUD! We’re not 
                sure how it happened, or why it happened, but it seems all they want to do is 
                drink, make friends and have a good time on vacation?
                Maybe you can too.
                </p>
          </div>
        </div>
        
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 300 }}
          animate={{ opacity: 1, y:  0 }}
          transition={{
              duration: 0.8,
              delay: 0.75,
              ease: [0, 0.71, 0.2, 1.01]
          }}>
          <Image src={TurtleStand} alt="turtle bottle" className='mx-auto h-auto max-h-[60vh] w-auto'/>
        </motion.div>

    </section>
  )
}

export default Hero