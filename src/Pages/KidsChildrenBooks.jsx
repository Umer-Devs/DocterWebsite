import React from 'react'
import { BookOnePage, HeaderOne } from '../Componenets'
import HeroBannerSection from '../Componenets/HeroBannerSection'
import { Children1, Children2 } from '../assets'

const KidsChildrenBooks = () => {
  return (
    <>
     <HeaderOne/>

     <section className=''>
      <HeroBannerSection title1="Magical Stories for" title2="Growing Minds" description="Delightful tales that spark imagination and make little eyes light up with wonder.
Colorful pages filled with friendly characters, simple words, and endless giggles.
Perfect first stories to nurture a lifelong love of reading — one magical book at a time." btn1="Explore Our Collection" btn2="Discover New Releases" imgOne={Children1} imgTwo={Children2}/>
     </section>

<section>
    <BookOnePage/>
</section>
    
    </>
  )
}

export default KidsChildrenBooks