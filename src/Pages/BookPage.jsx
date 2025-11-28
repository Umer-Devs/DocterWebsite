import React from 'react'
import { BookOnePage, Footer, HeaderOne } from '../Componenets'
import { BookOne, HeroBanner } from '../assets'
import HeroBannerSection from '../Componenets/HeroBannerSection'

const BookPage = () => {
  return (
<>
<HeaderOne/>
<section>
    <HeroBannerSection  />
  
</section>

<BookOnePage/>
<Footer/>
</>
  )
}

export default BookPage