import Link from 'next/link'
import React from 'react';
import Logo from '@/assets/images/logo.svg';
import Bottle from '@/assets/images/button-bottle.png';
import Image from 'next/image';
import { motion } from "framer-motion";

const Header = () => {
  return (
    <header className='header absolute top-0 start-0 end-0 py-[20px] z-50'>
        <div className="container">
            <div className="flex items-center justify-between">
                {/* LOGO */}
            <motion.div 
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y:  0 }}
                transition={{
                    duration: 0.8,
                    delay: 0.1,
                    ease: [0, 0.71, 0.2, 1.01]
                }}>
                <Link href="/">
                    <Image src={Logo.src} alt="logo" width={Logo.width} height={Logo.height} className='max-w-[55px] md:max-w-[100px] 2xl:max-w-[184px]'/>
                </Link>
                </motion.div>
                {/* Navbar */}
                <div className="ms-auto">
                    <motion.div 
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x:  0 }}
                        transition={{
                            duration: 0.8,
                            delay: 0.2,
                            ease: [0, 0.71, 0.2, 1.01]
                        }}>
                        <Link href="/details" className='button button--primary'>
                            <span>Grab a Drink</span>
                            <Image src={Bottle} alt="bottle" width={Bottle.width} height={Bottle.height} />
                        </Link>
                    </motion.div>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header;