import Faq from '@/components/Faq'
import Gallery from '@/components/Gallery'
import Hero from '@/components/Hero'
import Team from '@/components/Team'
import React from 'react'

const Details = () => {
  return (
    <div className='page-details'>
      <Hero />
      <Gallery />
      <Team />
      <Faq />
    </div>
  )
}

export default Details