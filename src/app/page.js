import Image from 'next/image';
import React from 'react';
import TurtleStand from '@/assets/images/turtle-stand.png';
import TurtleBig from '@/assets/images/turtles-big-logo.png';
import TurtleBottles from '@/assets/images/turtles-bottles.png';
import Bottle from '@/assets/images/button-bottle.png';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className='md:h-screen pt-[7rem] min-h-screen md:min-h-[610px] section-hero overflow-hidden relative flex flex-col gap-6 justify-center items-center'>

      <div className='text-center flex flex-col gap-y-5 md:gap-10 justify-center'>
        <Image className='mx-auto section-hero__turtle-logo' src={TurtleBig.src} width={TurtleBig.width} height={TurtleBig.height} alt="" />

        <div>
          <Link href="/details" className='button button--lg button--primary'>
              <span>Grab a Drink</span>
              <Image src={Bottle} alt="bottle" width={Bottle.width} height={Bottle.height} />
          </Link>
        </div>
      </div>

        <div className='mt-auto section-hero__turtle-stand'>
          <Image src={TurtleStand.src} width={TurtleStand.width} height={TurtleStand.height} alt="" className=''/>
        </div>
      <Image src={TurtleBottles.src} width={TurtleBottles.width} height={TurtleBottles.height} alt="" className='section-hero__turtle-bottles'/>
    </div>
  )
}

export default Home;