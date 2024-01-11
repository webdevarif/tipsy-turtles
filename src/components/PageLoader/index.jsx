import Image from 'next/image'
import React from 'react';
import TurtlesBottle from '@/assets/images/logo.svg';

const PageLoader = () => {
  return (
    <div className='fixed w-full h-full bg-white flex items-center justify-center'>
        <Image src={TurtlesBottle} alt="Logo" className='max-w-full w-[200px]' />
    </div>
  )
}

export default PageLoader