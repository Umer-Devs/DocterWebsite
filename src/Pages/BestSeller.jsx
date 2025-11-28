import React from 'react'
import { BookOnePage, Footer, HeaderOne } from '../Componenets'
import { BookOne, HeroBanner } from '../assets'
import HeroBannerSection from '../Componenets/HeroBannerSection'

const BestSeller = () => {
  return (
<>
<HeaderOne/>
<section>
    <HeroBannerSection   title1='Top Picks of the Year' title2='Bestsellers' description='Dive into a curated collection of books that have captivated millions and shaped cultures worldwide.
From timeless literary classics to modern bestsellers redefining storytelling, these works spark dialogue and broaden perspectives.
Whether you seek wisdom, adventure, or fresh ideas, these celebrated titles offer something meaningful for every reader.'    />
  
</section>

<BookOnePage/>
<Footer/>
</>
  )
}

export default BestSeller