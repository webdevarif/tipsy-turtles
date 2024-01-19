import Link from 'next/link'
import React from 'react';
import Logo from '@/assets/images/logo.svg';
import Bottle from '@/assets/images/button-bottle.png';
import Image from 'next/image';
import { motion } from "framer-motion";

const Header = () => {
    const [isFocus, toggleFocus] = React.useState(false);
    const toggleFocusMenu = () => {
      toggleFocus(!isFocus);
    };

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
                        }}
                        >

                        <div className="inline-block relative" >

                            <button type='button' className='button bg-primary button--primary' onClick={() => toggleFocusMenu()}>
                                <span>Grab a Drink</span>
                                <Image src={Bottle} alt="bottle" width={Bottle.width} height={Bottle.height} />
                            </button>
                                {isFocus && <ul className='absolute bg-primary top-[calc(100%+1rem)] py-3 w-full rounded-[10px]'>
                                    <li><Link href="#section-the-story" className='leading font-primary text-[12px] md:text-[20px] px-5 py-2 block transition-all duration-300 text-white text-opacity-75 hover:text-opacity-100'>The Story</Link></li>
                                    <li><Link href="#section-mini-gallery" className='leading font-primary text-[12px] md:text-[20px] px-5 py-2 block transition-all duration-300 text-white text-opacity-75 hover:text-opacity-100'>Mini Gallery</Link></li>
                                    <li><Link href="#section-team" className='leading font-primary text-[12px] md:text-[20px] px-5 py-2 block transition-all duration-300 text-white text-opacity-75 hover:text-opacity-100'>Team</Link></li>
                                    <li><Link href="#section-faqs" className='leading font-primary text-[12px] md:text-[20px] px-5 py-2 block transition-all duration-300 text-white text-opacity-75 hover:text-opacity-100'>FAQs</Link></li>
                                </ul> }
                            </div>
                    </motion.div>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header;