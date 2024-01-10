import Link from 'next/link'
import React from 'react';
import Logo from '@/assets/images/logo.svg';
import Bottle from '@/assets/images/button-bottle.png';
import Image from 'next/image';

const Header = () => {
  return (
    <header className='header absolute top-0 start-0 end-0 py-[20px] z-50'>
        <div className="container">
            <div className="flex items-center justify-between">
                {/* LOGO */}
                <Link href="/">
                    <Image src={Logo.src} alt="logo" width={Logo.width} height={Logo.height} className='max-w-[55px] md:max-w-[100px] 2xl:max-w-[184px]'/>
                </Link>
                {/* Navbar */}
                <div className="ms-auto">
                    <Link href="/details" className='button button--primary'>
                        <span>Grab a Drink</span>
                        <Image src={Bottle} alt="bottle" width={Bottle.width} height={Bottle.height} />
                    </Link>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header;