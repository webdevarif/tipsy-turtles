import Faq from '@/components/Faq'
import Gallery from '@/components/Gallery'
import Hero from '@/components/Hero'
import Layout from '@/components/Layout'
import Team from '@/components/Team'
import React from 'react'

const Details = () => {
  return (
    <Layout>
        <Hero />
        <Gallery />
        <Team />
        <Faq />
    </Layout>
  )
}

export default Details