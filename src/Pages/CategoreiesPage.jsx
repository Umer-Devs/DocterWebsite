import React from 'react'
import HeroBannerSection from '../Componenets/HeroBannerSection'
import { CategotyOneSection, Footer, HeaderOne } from '../Componenets'
import DynamicBookSlider from '../Componenets/DynamicBookSlider'

const CategoreiesPage = () => {
  return (
    <>
    <HeaderOne/>
    
    <HeroBannerSection title1='Explore Books by' title2='Collection of Category' description='Explore an expansive collection of books spanning every genre — from gripping thrillers and heartwarming romances to mind-expanding non-fiction, soulful poetry, and timeless classics. Whether youre chasing your next obsession or rediscovering the joy of reading your perfstory is waiting right here'    />

    <CategotyOneSection/>

    <section className='mt-[4%]'>
        <Footer/>
    </section>
    
    
    </>
  )
}

export default CategoreiesPage