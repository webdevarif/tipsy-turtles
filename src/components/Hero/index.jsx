import React from 'react';
import Turtles from '@/assets/images/turtles-bottles.png';
import TurtleStand from '@/assets/images/turtle-stand-details.png';
import Image from 'next/image';


const Hero = () => {
  return (
    <section className='bg-[#F9FFF6] pt-[7rem] xl:pt-[15rem] min-h-screen flex flex-col gap-y-4 px-3 overflow-hidden relative'>
        <div className="container max-w-[1000px]">
          {/* Content Card */}
          <div className="bg-primary-darker text-white text-center p-[30px] pt-[40px] relative rounded-[15px] overflow-hidden">
              <Image src={Turtles} alt="turtle bottle" className='hidden md:inline-block max-w-[200px] absolute -top-10 -end-10'/>
              <h2 className='text-primary text-[40px] xl:text-[50px] 2xl:text-[70px] leading-[1] font-black mb-5'>The Story</h2>
              <div className="text-[16px] xl:text-[18px] 2xl:text-[24px] font-medium leading-[28px] xl:leading-[30px] 2xl:leading-[34px]">6200 CNF(T)urtles just washed up to shore; and they’re tipsy as FUD! We’re not sure how it happened, or why it happened, but it seems all they want to do is drink, make friends and have a good time on vacation?<br /> Maybe you can too.</div>
          </div>
        </div>
        <div className="text-center">
          <Image src={TurtleStand} alt="turtle bottle" className='mx-auto h-auto'/>
        </div>

    </section>
  )
}

export default Hero