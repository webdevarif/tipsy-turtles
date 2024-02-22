import React from 'react';
import Image from 'next/image';
import TurtleStand from '@/assets/images/turtle-stand.webp';
import TurtleBig from '@/assets/images/turtles-big-logo.webp';
import TurtleBottles from '@/assets/images/turtles-bottles.webp';
import Bottle from '@/assets/images/button-bottle.png';
import Link from 'next/link';
import { motion } from "framer-motion";

const HomeHero = () => {
  return (
    <motion.div className='md:h-screen pt-[7rem] min-h-screen md:min-h-[610px] section-hero overflow-hidden relative flex flex-col gap-6 justify-center items-center'
    
    >
      <div className='text-center flex flex-col gap-y-5 md:gap-10 justify-center'>
        <motion.div 
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.8,
                delay: 0.3,
                ease: [0, 0.71, 0.2, 1.01]
            }}
        >
        <Image 
            className='mx-auto section-hero__turtle-logo' 
            src={TurtleBig.src} 
            width={TurtleBig.width} 
            height={TurtleBig.height} 
            alt="turtle" />
        </motion.div>
        <div>
            <motion.div initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y:  0 }}
            transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01]
            }}>
            <Link 
                  href="/details" 
                  className='button button--lg button--primary'
              >
                  <span>Grab a Drink</span>
                <Image src={Bottle} 
                  alt="bottle" 
                  width={Bottle.width} 
                  height={Bottle.height} />
            </Link>
            </motion.div>
        </div>
      </div>
        <motion.div className='mt-auto section-hero__turtle-stand'
            initial={{ opacity: 0, x: -300}}
            animate={{ opacity: 1, x: 0 }}
            transition={{
                duration: 0.8,
                delay: 0.75,
                ease: [0, 0.71, 0.2, 1.01]
            }}>
          <Image 
                src={TurtleStand.src} 
                width={TurtleStand.width} 
                height={TurtleStand.height} 
                alt="" 
                className=''
                />
        </motion.div>
        <motion.div 
            initial={{ opacity: 0, x: 300}}
            animate={{ opacity: 1, x: 0 }}
            transition={{
                duration: 0.8,
                delay: 1,
                ease: [0, 0.71, 0.2, 1.01]
            }}
            className='section-hero__turtle-bottles'
            >
          <Image 
              src={TurtleBottles.src} 
              width={TurtleBottles.width} 
              height={TurtleBottles.height} 
              alt="" 
            />
        </motion.div>

        
      </motion.div>
  )
}

export default HomeHero;